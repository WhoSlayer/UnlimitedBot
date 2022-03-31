const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let mseconds = Math.floor(seconds)

let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${mseconds} seconds`;
const uptimeembed = new Discord.MessageEmbed()
.setDescription(`I have been awake for: **${uptime}**`)
.setColor('GREEN')

message.channel.send(uptimeembed)
}

module.exports.config = {
    name: "uptime",
    aliases: []
}