const mineflayer = require('mineflayer');
const Item = require('prismarine-item')(1.21)
const bot = mineflayer.createBot({
    host: 'localhost',
    port: 25565,
    username: 'FrescoDiZona',
    version: '1.21.1'
})
function giveItem(bot, item, count) {
    const mcData = require('minecraft-data')(bot.version);
    const itemId = mcData.itemsByName[item]?.id;
    var item = new Item(mcData.itemsByName.diamond_sword.id, 1, 0);
    var item2 = new Item(mcData.itemsByName.netherite_sword.id, 1, 0);
    var item3 = new Item(mcData.itemsByName.diamond_pickaxe.id, 1, 0);
    var item4 = new Item(mcData.itemsByName.netherite_pickaxe.id, 1, 0);
    var item5 = new Item(mcData.itemsByName.diamond_helmet.id, 1, 0);
    var item6 = new Item(mcData.itemsByName.netherite_helmet.id, 1, 0);
    var item7 = new Item(mcData.itemsByName.diamond_chestplate.id, 1, 0);
    var item8 = new Item(mcData.itemsByName.netherite_chestplate.id, 1, 0);
    var item9 = new Item(mcData.itemsByName.diamond_leggings.id, 1, 0);
    var item10 = new Item(mcData.itemsByName.netherite_leggings.id, 1, 0);
    var item11 = new Item(mcData.itemsByName.diamond_boots.id, 1, 0);
    var item12 = new Item(mcData.itemsByName.netherite_boots.id, 1, 0);
    var item13 = new Item(mcData.itemsByName.diamond_sword.id, 1, 0);
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
    var mcData = require('minecraft-data')(bot.version);
    giveItem(bot, item2, 1);
    giveItem(bot, item3, 1);
    giveItem(bot, item4, 1);
    giveItem(bot, item5, 1);
    giveItem(bot, item6, 1);
    giveItem(bot, item7, 1);
    giveItem(bot, item8, 1);
    giveItem(bot, item9, 1);
    giveItem(bot, item10, 1);
    giveItem(bot, item11, 1);
    giveItem(bot, item12, 1);
    giveItem(bot, item13, 1);
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