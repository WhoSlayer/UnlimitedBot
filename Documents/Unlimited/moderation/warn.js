const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const Report = require("../models/report.js")
const mongoose = require("mongoose");

const fs = require("fs");
mongoose.connect('mongodb://localhost/Reports');


module.exports.run = async (bot, message, args) => {
    await message.delete()
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    let rUser = message.mentions.members.first() || message.guild.members.cache.get(args.slice(0, 1).join(' '));
    if (!rUser) return message.channel.send("Cannot find that user.");
    let rreason = args.slice(1).join(" ");
    if (!rreason) return ("Please supply a reason for the warn.")
    const dmembed = new Discord.MessageEmbed()
        .setDescription(`\`\`\`You were warned in ${message.guild.name} | ${rreason}\`\`\``)


    const report = new Report({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.tag,
        userID: rUser.id,
        reason: rreason,
        rUsername: message.author.tag,
        rUserID: message.author.id,
        time: message.createdAt,
        serverID: message.guild.id

    });

    report.save()
        .then(result => console.log(result))
        .catch(err => console.log(err));

    const fefefe = new Discord.MessageEmbed().setDescription(`\`\`\`${rUser.user.tag} has been warned | ${rreason}\`\`\``) // rUser.user.username -  edit 1.0
    message.channel.send(fefefe)
    rUser.send(dmembed)
}

module.exports.config = {
    name: "warn",
    aliases: []
}