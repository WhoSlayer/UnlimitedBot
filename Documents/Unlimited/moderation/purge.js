const Discord = require("discord.js")

  
exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner) return message.channel.send('You do not have permission to use this command.')              
         const purge = new Discord.MessageEmbed()
        .setTitle("Command: !purge")
        .setColor("#03adfc")
        .setDescription("**Description:** Delete a number of messages from a channel.\n**Example:** !purge 5")
        .setTimestamp()

        if(!args[1]) return message.channel.send(purge)

        message.delete();

      const bedlol = new Discord.MessageEmbed().setDescription(`\`\`\`${args[1]} messages have been deleted by ${message.member.user.tag}.\`\`\``).setColor("#FF0000")
        message.channel.bulkDelete(args[1]) 
        message.channel.send(bedlol)
        .then(msg => {
          msg.delete({ timeout: 3000 })
        })
        


}
module.exports.config = {
  name: "purge",
  aliases: []
  }