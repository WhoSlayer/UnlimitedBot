const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const count = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .addField("Members:", `${message.guild.memberCount}`)
        .addField("Humans:", `${message.guild.members.cache.filter(member => !member.user.bot).size}`)
        .addField("Bots:", `${message.guild.memberCount - message.guild.members.cache.filter(member => !member.user.bot).size}`)
        .setColor('RED')
    message.channel.send(count)
}


module.exports.config = {
    name: "membercount",
    aliases: ['mc']
}
