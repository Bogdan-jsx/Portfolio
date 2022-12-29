const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(`
Hello! 
I will send you all messages from your portfolio website.
Good luck!`));

function sendMessage(messageObj) {
    const { name, email, message } = messageObj;

    bot.telegram.sendMessage(process.env.BOT_CHAT_ID, `Hey! You got some message from your portfolio website!
Name: ${name}
Email: ${email}
Message: ${message}`);
}

module.exports = {
    bot,
    sendMessage,
}
