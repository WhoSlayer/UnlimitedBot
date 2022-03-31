const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const eo = "https://www.litespeedtech.com/support/wiki/lib/exe/fetch.php/litespeed_wiki:config:404.png?w=400&tok=a0557c"
    let sEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setAuthor(`${message.guild.name}`)
    .setThumbnail(`${message.guild.iconURL()}`) 
    .addField("Owner:", message.guild.owner.user.tag)
    .addField("Region:", message.guild.region)
    .addField("Channel Categories:", message.guild.channels.cache.filter(channel => channel.type === "category").size)
    .addField("Text Channels:", message.guild.channels.cache.filter(channel => channel.type === "text").size)
    .addField("Voice Channels:", message.guild.channels.cache.filter(channel => channel.type === "voice").size)
    .addField("Members:", message.guild.memberCount)
    .addField("Roles:", message.guild.roles.cache.filter(role => role).size)
    .setFooter(`Server ID: ${message.guild.id}`)
    .setTimestamp(message.guild.createdAt)

    let bEmbed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setAuthor(`${message.guild.name}`)
    .setThumbnail(`${eo}`) 
    .addField("Owner:", message.guild.owner.user.tag)
    .addField("Region:", message.guild.region)
    .addField("Channel Categories:", message.guild.channels.cache.filter(channel => channel.type === "category").size)
    .addField("Text Channels:", message.guild.channels.cache.filter(channel => channel.type === "text").size)
    .addField("Voice Channels:", message.guild.channels.cache.filter(channel => channel.type === "voice").size)
    .addField("Members:", message.guild.memberCount)
    .addField("Roles:", message.guild.roles.cache.filter(role => role).size)
    .setFooter(`Server ID: ${message.guild.id}`)
    .setTimestamp(message.guild.createdAt)

    if(!message.guild.iconURL()) return message.channel.send(bEmbed)

message.channel.send(sEmbed);


}

module.exports.config = {
  name:"serverinfo",
  aliases: ['serverinfo','si', 'serverinfo', 'aboutserver']
}