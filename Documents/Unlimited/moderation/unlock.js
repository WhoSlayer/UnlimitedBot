const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

      message.channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true,
        CREATE_INSTANT_INVITE: true
      })
      message.channel.send("Channel has been unlocked manually.")
}
    

module.exports.config = {
    name: "unlock",
    aliases: []
}