const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  const user = message.mentions.users.first() ||  message.guild.members.cache.get(args[1]) || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
       .setAuthor(user.username)
        .setImage(user.avatarURL());

/*    const urselfbro = new Discord.MessageEmbed()
      .setColor(0x333333)
     .setAuthor(message.author.username)
     .setTimestamp()
     .setImage(message.author.displayAvatarURL());
*/

/*if(user) return*/ message.channel.send(avatarEmbed);
  
}

module.exports.config = {
name: "avatar",
aliases: ["av", "avatar", "pfp"]
}


 