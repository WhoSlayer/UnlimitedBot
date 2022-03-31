const Discord = require("discord.js")  

const bot = new Discord.Client()

module.exports.run = async (bot, message, args) => {
message.channel.send('Pong!').then((sentMessage) => sentMessage.edit('Pong! `' + Math.floor(bot.ws.ping) + ' ms`')
) 


}
module.exports.config = {
    name: "ping",
    aliases: ["latency"]
    }
