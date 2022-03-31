console.time("ban")
//
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner)
    return message.channel.send(
      "You do not have permission to use this command."
    );

  let user =
    client.users.cache.get("479619265998094337")
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  let reason = args.slice(1).join(" ");

  let validuser = new Discord.MessageEmbed()
    .setColor("#f53d3d")

    .setDescription(`\`\`\`You must supply a user ID or a user mention.\`\`\``);
  if (!user) return message.channel.send(validuser).catch(console.error);
  {
  }

  let yourself = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`You can't ban yourself.\`\`\``);

  if (user.id === message.author.id) {
    return message.channel.send(yourself);
  }

  let unable = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`I was unable to ban that user.\`\`\``);

  if (!message.guild.member(user).bannable) return message.channel.send(unable);

  let noreason = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`You must supply a reason for the ban.\`\`\``);
  if (reason.length < 1) return message.channel.send(noreason);

  const bannn = new Discord.MessageEmbed()
    .setColor("#03adfc")
    .setDescription(`You were banned from ${message.guild.name} | ${reason}`)
    .setTimestamp();

  user.send(bannn).then((msg) => message.guild.member(user).ban());
  message.delete();

  const banmessage = new Discord.MessageEmbed()
    .setColor("#2dfa78")
    .setDescription(
      `\`\`\`${message.author.tag} has swong the ban hammer on ${user.user.tag} | ${reason}\`\`\``
    );

  message.channel.send(banmessage);
};
module.exports.config = {
  name: "ban",
  aliases: [],
};
//
console.timeEnd("ban")