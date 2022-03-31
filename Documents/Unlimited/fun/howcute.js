const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

const randomator = Math.floor(Math.random()* 11)
message.channel.send(`${message.author.username}, I would say **${randomator}/10** :wink:`)
}

module.exports.config = {
    name:"rateme",
    aliases: ["howcute"]
}