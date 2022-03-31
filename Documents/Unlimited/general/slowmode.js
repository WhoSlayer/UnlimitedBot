
const Discord = require('discord.js')
const bot = new Discord.Client()
const {
    promptMessage
} = require("../functions.js")


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner) return message.channel.send("<:unsuccess:711232495592538124> You do not have permission to use this command.");
    if(!args[1]) return message.channel.send(`You need to specify a the time in (s), you want slowmode to be for.`)

    const beder = new Discord.MessageEmbed().setDescription(`**<:unsuccess:711232495592538124> That is not a valid time or number**.\n> *E.g. !slowmode 5*`)
    if(isNaN(args[1])) return message.channel.send(beder)


    let wagwan = new Discord.MessageEmbed().setDescription(`<:success:710968598386049044> **Slowmode has been successfully removed.**`).setColor('GREEN')
    if(args[1] === ("0")) return message.channel.setRateLimitPerUser(args[1]), message.channel.send(wagwan), message.delete();

    message.channel.setRateLimitPerUser(args[1]) 
    let mebed = new Discord.MessageEmbed().setDescription(`<:success:710968598386049044> **Slowmode has been successfully set for ${args[1]} seconds / per message.**`).setColor('GREEN')
    message.channel.send(mebed)
    message.delete()
    
}

module.exports.config = {
    name: "slowmode",
    aliases: ["slow"]
}
