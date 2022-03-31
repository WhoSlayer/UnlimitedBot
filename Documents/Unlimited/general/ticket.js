/*const Discord = require('discord.js')
const {
    promptMessage
} = require('../functions.js')

const reactions = ["✅"]

const reactions1 = ["❎"]



function Random() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const fair = new Discord.MessageEmbed()
    .setDescription("Please describe in detail, the reasoning of creating this ticket.")
    .setFooter("")
    .setColor("RANDOM")


module.exports.run = async (bot, message, args) => {
    let iconator = message.guild.iconURL();
    var embed = new Discord.MessageEmbed()
        .setTitle(`Welcome to ${message.guild.name} Support!`)
        .setFooter(`${message.guild.name}`)
        .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))
        .setDescription("Would you like to continue? This is your only chance to reconsider.\n *Please wait for the emojis to load fully before reacting.*")
        .setImage("")
        .setThumbnail(iconator)

    message.reply("Please check your DMs for support.")
    const m = await message.author.send(embed);

    const reacted = await promptMessage(m, message.author, 5, reactions);
    const reacted1 = await promptMessage(m, message.author, 5, reactions1);

    if (reacted) {
        message.author.send(fair)
    } else
    if (reacted1) {
        const bed = new Discord.MessageEmbed().setDescription("<:success:710968598386049044> **Ticket creation has been cancelled.**").setColor('GREEN')
        message.author.send(bed)
    }
}

module.exports.config = {
    name: "ticket",
    aliases: []
}

*/

const Discord = require("discord.js")
const {
    promptMessage
} = require('../functions.js')

const reactions = ["🇮"]

const reactions1 = ["🇸"]



function Random() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Infection = new Discord.MessageEmbed()
    .setTitle("Welcome to Infection Support! Which area do you require assistance in?")
    .setFooter("Frosted Studio")
    .setColor("RANDOM")

const Strucid = new Discord.MessageEmbed()
    .setTitle("Welcome to Strucid Support! Which area do you require assistance in?")
    .setFooter("Frosted Studio")
    .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))


module.exports.run = async (bot, message, args) => {
    var embed = new Discord.MessageEmbed()
        .setTitle("Welcome to Frosted Studio Support!")
        .setFooter("Frosted Studio")
        .setColor('#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6))
        .setDescription("Firstly, which game is this ticket intended?\n**__React to:__**\n\n 🇮 to make an Infection-related ticket.\n\n 🇸 to make a Strucid-related ticket.")
        .setImage("")
        .setThumbnail("https://cdn.discordapp.com/attachments/699350506304307300/709815438367916116/64db92c244d565242c9cee6f6aeb12e8.png")

    message.reply("Please check your DMs for support.")
    const m = await message.author.send(embed);

    const reacted = await promptMessage(m, message.author, 5, reactions);
    const reacted1 = await promptMessage(m, message.author, 5, reactions1);

    if (reacted) {
        message.author.send(Infection)
    } else
    if (reacted1) {
        message.author.send(Strucid)
    }
}

module.exports.config = {
    name: "ticket",
    aliases: []
}