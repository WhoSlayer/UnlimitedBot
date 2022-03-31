const Discord = require("discord.js");



exports.run = (client, message, args) => {
 
 
  if(!message.member.hasPermission("KICK_MEMBERS") || !message.guild.owner) return message.channel.send("You do not have permission to use this command");
 
 let user = message.mentions.members.first() || message.guild.members.cache.get(args.slice(0, 1).join(' '));
 let reason = args.slice(1).join(" ");



let validuser = new Discord.MessageEmbed()
.setColor("#f53d3d")

.setDescription(`\`\`\`You must supply a user ID or a user mention.\`\`\``)
if (!user)  return message.channel.send(validuser).catch(console.error); {


}

 


let yourself = new Discord.MessageEmbed()
.setColor("#f53d3d")
.setDescription(`\`\`\`You can't kick yourself.\`\`\``)
 



let unable = new Discord.MessageEmbed()
.setColor("#f53d3d") 
.setDescription(`\`\`\`I was unable to kick that user.\`\`\``)
  if (user.id === message.author.id) {
    return message.channel.send(yourself);
  }


    
if(!message.guild.member(user).kickable) 
return message.channel.send(unable); 

  if (!message.guild.member(user).kickable) return message.channel.send(unable);

  let noreason = new Discord.MessageEmbed()
    .setColor("#f53d3d")
    .setDescription(`\`\`\`You must supply a reason for the kick.\`\`\``)  
if (reason.length < 1) return message.channel.send(noreason);
   

  
  




  const bannn = new Discord.MessageEmbed()
    .setColor("#03adfc")
    .setDescription(`You have been kicked from ${message.guild.name} | ${reason}` )
        .setTimestamp()


  
user.send(bannn).then(msg => message.guild.member(user).kick()) 
message.delete();
 
 const kickmessage = new Discord.MessageEmbed()
.setColor("#2dfa78")
.setDescription(`\`\`\` ${message.author.tag} has kicked ${user.user.tag} | ${reason}\`\`\``)
  
 message.channel.send(kickmessage)

 


  


  
}
 

module.exports.config = {
  name: 'kick',
   aliases: [],

};