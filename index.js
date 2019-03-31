const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://botcreator3.herokuapp.com',
    token = process.env.TOKEN || '648944209:AAHX3fF-RTeZhJALEFjodIIifRnNG274mj8',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message',(msg)=>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Received");

})
