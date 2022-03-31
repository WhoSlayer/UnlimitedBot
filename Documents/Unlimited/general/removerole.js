const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    const nologs = new Discord.MessageEmbed()
    .setColor("#F53D3D")
    .setDescription("**Please create a channel named mod-logs or audit-logs.**")

    let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs") || message.guild.channels.cache.find(c => c.name === "audit-logs")

    if(!sChannel) return message.channel.send(nologs)

    if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")){ return message.channel.send("You dont have permission to perform this command!")}

    let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const bro = new Discord.MessageEmbed().setDescription("<:unsuccess:711232495592538124> | **Please provide a user to remove a role to.**").setColor('RED')
    if(!rMember) return message.channel.send(bro)
    let role = message.guild.roles.cache.find(r => r.name == args.slice(1).join(" ")) || message.guild.roles.cache.find(r => r.id == args.slice(1).join(" ")) || message.mentions.roles.first()
    const what = new Discord.MessageEmbed().setDescription("<:unsuccess:711232495592538124> | **Please provide a role to remove to said user.**").setColor('RED')
    if(!role) return message.channel.send(what) 

    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send('Uh oh, it seems like you do not have permission to use this command.')

    if(rMember.roles.cache.has(role)) {
        let eeoo = new Discord.MessageEmbed().setDescription(`<:unsuccess:711232495592538124> | **${rMember.user.tag}** doesn't have that role!`).setColor('RED')
        return message.channel.send(eeoo)
    } else {
       // message.delete();

        await rMember.roles.remove(role.id).catch(e => console.log(e.message))
        let erer = new Discord.MessageEmbed().setDescription(`<:success:710968598386049044> **${rMember.user.tag}** | - ${role.name}`).setColor('GREEN')
        message.channel.send(erer)
    }

    let embed = new Discord.MessageEmbed()
    .setColor('AQUA')
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
    .addField("Command:", "removerole")
    .addField("Member:", rMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Role:", role)
    
        sChannel.send(embed)
}

module.exports.config = {
    name: "rrole",
    aliases: ['removerole','rr', 'minus', 'roleremove', 'delrole']
}