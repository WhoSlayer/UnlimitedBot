const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete().catch();
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
  if (message.content.startsWith("@here") || message.content === "@here" || message.content.endsWith("@here")) return message.channel.send(`**${message.member}** is being a **retard** and trying to ping here. Clown on him. :clown:`);
  const say = args.join(' ').slice(3)
  message.channel.send(say);

}
module.exports.config = {
  name: "say",
  aliases: []
}