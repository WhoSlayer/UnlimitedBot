const Discord = require("discord.js");
const mongoose = require("mongoose");
const Report = require("../models/report.js");
const warnings = require("../moderation/warn.js")
const { realpathSync } = require("fs");

module.exports.run = async (bot, message, args) => {
   
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let eUser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!eUser) return message.channel.send("Cannot find that user. Please specify one.");
    Report.findOne({serverID: message.guild.id, UserID: eUser.id}, async (err, data) =>{
        if(err) console.log(err)
  //      if(!data) return message.channel.send(`${eUser.user.username} has no warnings.`)
        let rEmbed = new Discord.MessageEmbed()
        .setTitle(`Responsible user, ${eUser.user.username}, has ${data.length}`)
        .setDescription(data.map(d=>{
            return d.Report.map(w=> `Moderator: ${message.guild.members.cache.get(w.rUsername)} Reason: ${w.reason}`)
        }))

        message.channel.send(rEmbed)



    })
}

module.exports.config = {
    name: "warnings",
    aliases: ["modlogs", "warns"]
}