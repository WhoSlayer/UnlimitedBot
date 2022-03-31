const Discord = require('discord.js')
const fs = require('fs')
//i tested it look in test server thingu
module.exports.run = async (bot, message, args) => {

    const nologs = new Discord.MessageEmbed()
        .setColor("#F53D3D")
        .setDescription("**Please create a channel named mod-logs**")

    let sChannel = message.guild.channels.cache.find(c => c.name === "mod-logs")

    if (!sChannel) return message.channel.send(nologs)
    if (!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send('You do not have permission to use this command!')
    const prefix = new Discord.MessageEmbed()
        .setColor('#F53D3D')
        .setDescription("**Please supply the prefix you want.**")

    if (!args[0]) return message.channel.send(prefix)

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    prefixes[message.guild.id] = {
        prefixes: args[1]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    })

    message.delete();

    const sprefix = new Discord.MessageEmbed()
        .setColor('#2DFA78')
        .setDescription(`**Successfully set the prefix to \`\`${args[0]}\`\`**`)

    message.channel.send(sprefix)

    let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .addField("Command:", "setprefix")
        .addField("Moderator:", message.author.username)
        .addField("Prefix:", `${args[0]}`)

    sChannel.send(embed)

}
module.exports.config = {
    name: "setprefix",
    aliases: []
}