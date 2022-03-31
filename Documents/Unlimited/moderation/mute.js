const Discord = require("discord.js");
const ms = require("ms");

const fs = require("fs");

const moment = require("moment-timezone");

exports.run = (bot, message, args) => {
  let reason = args.slice(2).join(" ");
  if (!reason) reason = "No Reason Provided";

  let urmom = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(
      `\`\`\`Invalid permissions.\`\`\``
    );
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(urmom);

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);


  let muteRole = message.guild.roles.cache.find(r => r.name === "Muted");
  if (!muteRole) return;
  const cannotfind = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`Muted role does not exist.\`\`\``);
  if (!muteRole) return message.channel.send(cannotfind).catch(console.error);

  let validuser = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`You must supply a user ID or a user mention.\`\`\``);

  if (!member) return message.channel.send(validuser).catch(console.error); {}

  const heyhey = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`${member.user.tag} is already muted.\`\`\``);

  if (member.roles.cache.has(muteRole.id)) return message.channel.send(heyhey);

  let unable = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`There was an error in unmuting ${member.user.tag}.\`\`\``);

  if (member.roles.highest.position >= message.member.roles.highest.position)
    return message.channel.send(unable);

  const mutemessage = new Discord.MessageEmbed()
    .setColor("#2dfa78")
    .setDescription(
      `\`\`\`${message.author.tag} has muted ${member.user.tag} | ${reason}\`\`\``
    );

  const dmute = new Discord.MessageEmbed()
    .setColor("#2dfa78")
    .setDescription(
      `\`\`\`${member.user.tag}'s mute has expired.\`\`\``
    );

  message.guild.member(member).roles.add(muteRole);



  message.channel.send(mutemessage).then()
  const time = args.join("").slice(2);

  const emute = new Discord.MessageEmbed().setDescription("<:success:710968598386049044> | **You did not specify a time.**").setColor('GREEN')
  if (!time) return message.channel.send(emute);

  setTimeout(function () {


    member.roles.remove(muteRole.id);
    message.channel.send(dmute)
  }, ms(time))
  message.delete();
};

module.exports.config = {
  name: "mute",
  description: "Mute a member so they are unable to speak.",
  usage: "\n!mute [@user] [reason] \n!mute [user id] [reason]",
  aliases: [],
  example: "!mute @Slayer#0002 being cool \n!kick 298554512136863747 being cool"
};