const mineflayer = require('mineflayer');
const Item = require('prismarine-item')(1.21)
const bot = mineflayer.createBot({
    host: '25.60.81.241',
    port: 25565,
    username: 'FrescoDiZona',
    version: '1.21.1'
})
function giveItem(bot, item, count) {
    const mcData = require('minecraft-data')(bot.version);
    const itemId = mcData.itemsByName[item]?.id;
    if (!itemId) {
        bot.chat(`Oggetto "${item}" non trovato!`);
        return;
    }
}
   
bot.on('login', () => {
    console.log('Logged in as ' + bot.username);
})
bot.on('spawn', () => {
    console.log('Spawned at ' + bot.entity.position.x + ' ' + bot.entity.position + ' ' + bot.entity.position.z);
    bot.chat('Hello guys!');
    giveItem(bot,'netherite_sword', 1);
    giveItem(bot,'netherite_pickaxe', 1);
    giveItem(bot,'netherite_helmet', 1);
    giveItem(bot,'netherite_chestplate', 1);
    giveItem(bot,'netherite_leggings', 1);
    giveItem(bot,'netherite_boots', 1);
    giveItem(bot,'stick', 1);
    giveItem(bot,'enchanted_golden_apple', 24);
    giveItem(bot,'bow', 1);
    giveItem(bot,'golden_carrot', 128);
    giveItem(bot,'apple', 128);
    giveItem(bot,'diamond_sword', 1);
    if (!itemId) {
        bot.chat(`Oggetto "${item}" non trovato!`);
        return;

    }

})
bot.on('chat', (username, message) => {
    console.log(username + ' said: ' + message);
    switch (message) {
        case 'help':
            bot.chat('You can say hello, goodbye, or help.');
            break;
        case 'give-me-something':
            bot.inventory.give(new Item(mcData.itemsByName.diamond_sword.id, 1, 0), 1);
            break;
    }
})
bot.on('playerJoined', (player) => {
    console.log(player.username + ' joined the game.');
    bot.chat(`${player.username} joined the game.`);
})
bot.on('playerLeft', (player) => {
    console.log(player.username + ' left the game.');
    bot.chat(`${player.username} left the game.`);
})
bot.on('respawn', () => {
    bot.chat(`get ready ${username}!`);
})


bot.on('error', (error) => {
    console.error(error);
    process.exit(1);
})