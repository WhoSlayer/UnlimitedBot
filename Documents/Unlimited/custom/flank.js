const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    const nologs = new Discord.MessageEmbed()
    .setColor("#F53D3D")
    .setDescription("**Please create a channel named mod-logs**")

    let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")

    if(!sChannel) return message.channel.send(nologs)


    let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[1]) || message.guild.members.cache.get(args[1])
    if(!rMember) return message.channel.send("Please provide a user to add a role to.")
    let role = message.guild.roles.cache.find(r => r.name == "flank respected") 
    if(!role) return message.channel.send("Please provide a role to add to said user.") 


    if(rMember.roles.cache.has(role.id)) {
        let eeoo = new Discord.MessageEmbed().setDescription(`<:unsuccess:711232495592538124> | **${rMember.user.tag}** already has the role!`).setColor('RED')
        return message.channel.send(eeoo)
    } else {
       // message.delete();

        await rMember.roles.add(role.id).catch(e => console.log(e.message))
        let erer = new Discord.MessageEmbed().setDescription(`<:success:710968598386049044> **${rMember.user.tag}** | + ${role.name}`).setColor('GREEN')
        message.channel.send(erer)
    }

    let embed = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
    .addField("Command:", "flank")
    .addField("Member:", rMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Role:", role)
    
        sChannel.send(embed)
}

module.exports.config = {
    name: "flank",
    aliases: []
}