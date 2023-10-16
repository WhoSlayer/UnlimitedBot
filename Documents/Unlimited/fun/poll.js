const Discord = require("discord.js")
const {
    promptMessage
} = require('../functions.js')
const colours = require("../colours.json")
const reactions = ["710968598386049044"]

const reactions1 = ["711232495592538124"]
module.exports.run = async(bot, message, args) => {
    message.delete().catch();
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
           const say = args.slice(1).join(' '); 
           const newMessage = new Discord.MessageEmbed()
           .setFooter(`Poll initiated by ${message.author.tag}`)
           .setTitle(`${say}`)
           .setColor(`${colours.CYAN}`)
    //    message.channel.send(newMessage);
        const m = await message.channel.send(newMessage);

        const reacted = await promptMessage(m, message.author, 2, reactions);
        const reacted1 = await promptMessage(m, message.author, 2, reactions1);
    
}

module.exports.config = {
    name: "poll",
    aliases: []
}
