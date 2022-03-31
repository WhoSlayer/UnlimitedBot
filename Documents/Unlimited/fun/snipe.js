const Discord = require('discord.js');
const { getMember, formatDate } = require("../functions.js");

module.exports.run = async(bot, message, args) => {
 //   if(!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner) return message.channel.send("You do not have permission to use this command.");
    const msg = bot.snipes.get(message.channel.id)
    if (!msg) return message.channel.send("There is nothing to snipe.")
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
    .setFooter(`🎯 by ${member.user.tag}`)      
    .setColor('RANDOM')
    .setDescription(msg.content)
    .setTimestamp(msg.createdAt)

    if (msg.image) embed.setImage(msg.image);

    message.channel.send(embed);
}
module.exports.config = {
    name: "snipe",
    aliases: ["sniper"]
}
