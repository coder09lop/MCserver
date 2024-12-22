const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 25565,
    username: 'FrescoDiZona',
    version: '1.21.1'
})
bot.on('login', () => {
    console.log('Logged in as ' + bot.username);
})
bot.on('spawn', () => {
    console.log('Spawned at ' + bot.entity.position.x + ' ' + bot.entity.position + ' ' + bot.entity.position.z);
    bot.chat('Hello guys!');
})
bot.on('chat', (username, message) => {
    console.log(username + ' said: ' + message);
    switch (message) {
        case 'help':
            bot.chat('You can say hello, goodbye, or help.');
            break;
    }
})



bot.on('error', (error) => {
    console.error(error);
})