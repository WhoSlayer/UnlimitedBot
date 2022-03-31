const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let urmom = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    //.setDescription("<:failure:692841392191438978> You must supply a user ID or a user mention.")
    .setDescription(
      `\`\`\`Unfortunately, this command requires the Ban Members permission & Administrator permissions.\`\`\``
    );
  if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
    return message.channel.send(urmom);

  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No Reason Provided";

  client.unbanReason = reason;
  client.unbanAuth = message.author;

  let id = args[1];

  let validuser = new Discord.MessageEmbed()
    .setColor("#d9372b")

    .setDescription(`\`\`\`\`You must supply an ID to unban.\`\`\`\``);
  if (!id) return message.channel.send(validuser).catch(console.error);

  message.guild.fetchBans().then(bans => {
    if (bans.some(u => id.includes(u.username))) {
      let user = bans.find(user => user.username === id);

      message.guild.unban(user.id, reason);
    } else if (bans.some(u => id.includes(u.id))) {
      message.guild.members.unban(id);

      message.delete();
    } else {
      const notbanned = new Discord.MessageEmbed()
        .setColor("#d9372b")
        .setDescription(`\`\`\`That user is not banned.\`\`\``);
      return message.channel.send(notbanned);
    }

    const hey = client.users.find(usr => usr.id == id).tag;

    const unban = new Discord.MessageEmbed()
      .setColor("#2dfa78")
      .setDescription(
        `\`\`\`${message.author.tag} has unbanned ${hey} | ${reason}\`\`\``
      );
    message.channel.send(unban);
  });
};

module.exports.config = {
  name: "unban",
  description: "Unbans a user from the server.",
  usage: "!unban [user id] [reason] \n!unban 34534534 Yes",
  example: "!unban 298554512136863747 Why not",
  aliases: []
};