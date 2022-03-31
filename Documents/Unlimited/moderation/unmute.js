const Discord = require("discord.js");
const ms = require("ms");

const fs = require("fs");

const moment = require("moment-timezone");

exports.run = (bot, message, args) => {
  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No Reason Provided";

  let urmom = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(
      `\`\`\`Invalid permissions.\`\`\``
    );
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(urmom);

  let member =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  let muteRole = message.guild.roles.cache.find(r => r.name === "Muted");
  if (!muteRole) return;
  const cannotfind = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(
      `\`\`\`Muted role does not exist.\`\`\``
    );
  if (!muteRole) return message.channel.send(cannotfind).catch(console.error);

  let validuser = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`You must supply a user ID or a user mention.\`\`\``);

  if (!member) return message.channel.send(validuser).catch(console.error);
  {
  }

  const heyhey = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`${member.user.tag} isn't muted.\`\`\``);

  if (!member.roles.cache.has(muteRole.id)) return message.channel.send(heyhey);

  let unable = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`\`There was an error in unmuting ${member.user.tag}.\`\`\``);

  if (member.roles.highest.position >= message.member.roles.highest.position)
    return message.channel.send(unable);

  const mutemessage = new Discord.MessageEmbed()
    .setColor("#2dfa78")
    .setDescription(
      `\`\`\`${message.author.tag} has unmuted ${member.user.tag} | ${reason}\`\`\``
    );

  message.guild.member(member).roles.remove(muteRole).then(message.delete());

  message.channel.send(mutemessage);
};

module.exports.config = {
  name: "unmute",
  description: "Unmute a member so they are unable to speak..",
  usage: "\n!unmute [@user] [reason] \n!unmute [user id] [reason]",
  aliases: [],
  example:
    "!unmute @Slayer#0001 being cool \n!kick 298554512136863747 being cool"
};
