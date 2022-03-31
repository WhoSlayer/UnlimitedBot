
const Discord = require("discord.js")

module.exports.run = async (message, bot, args) => {
    
   // let roleName = message.content.splice(1).join(" ");
   let role = message.guild.roles.cache.find(r => r.name == args.slice(0).join(" ")) || message.guild.roles.cache.find(r => r.id == args.slice(0).join(" ")) || message.mentions.roles.first()
   if(!args[1]) return message.channel.send("You didn't specify a role, retard.")
   let membersWithRole = message.guild.members.cache.filter(member => { 
        return member.roles.cache.find(role.id);
    }).map(member => {
        return member.user.username;
    })

    let embed = new Discord.MessageEmbed()
        .setTitle(roleName)
        .setDescription(`${membersWithRole.join("\n")}`)
        .setColor("#0xFFFF")
    

    return message.channel.send(embed);
}


module.exports.config = {
    name: "members",
    aliases: []
}