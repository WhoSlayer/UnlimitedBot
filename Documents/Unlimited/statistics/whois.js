const Discord = require("discord.js")
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../functions.js");
const { create } = require("../models/Guild.js");
const { connect, mongo } = require("mongoose");
const saveSubdocs = require("mongoose/lib/plugins/saveSubdocs");
  
module.exports.run = async (bot, message, args) => {

    const member = getMember(message, args.join(" "));

  
        const joined = formatDate(member.joinedAt);
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

 
        const created = formatDate(member.user.createdAt);

        if(member.hasPermission("VIEW_CHANNEL")) {
            var aaa = "**Member**"
        }
        if(member.hasPermission("KICK_MEMBERS")) {
            var bbb = "**Server Moderator**"
        }
        if(member.hasPermission("MANAGE_SERVER" || "MANAGE_CHANNELS")) {
            var ccc = "**Server Manager**"
        }
        if(member.hasPermission("ADMINISTRATOR")) {
            var ddd = "**Administrator**"
        }

    
        
        const embed = new Discord.MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('Member information:', stripIndents`**> Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)

            .addField('User information:', stripIndents`**> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Tag:** ${member.user.tag}
            **> Created at:** ${created}`)
            .addField('Server Acknowledgements:', stripIndents` ${aaa}\n${bbb}\n${ccc}\n${ddd}`)
            
            .setTimestamp()

        if (member.user.presence.game) 
            embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

        message.channel.send(embed);
}
  module.exports.config = {
    name: "whois" || "userinfo",
    aliases: ["userinfo"]
  }
