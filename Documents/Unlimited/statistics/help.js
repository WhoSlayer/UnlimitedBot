const Discord = require("discord.js")
const bot = new Discord.Client()

module.exports.run = async (bot, message, args) => {
    const helplol = new Discord.MessageEmbed()
    .setTitle("__**Unlimited Commands™**__")
    .setColor('RANDOM')
    .addField("__**1.1.** Moderation Commands:__", "\n`kick` - Kicks a member from the server, via ID and user mention.\n`ban` - Bans a member from the server, via ID and user mention.\n`unban` - Unbans a member, via ID or mentions.\n`mute` - Mutes a user for a select time period, via ID or mention. [Requires 'Muted' role]\n`unmute` - Unmutes a user, via ID or mentions.\n`warn` - Warns a user.\n`unlock` - Unlocks a channel, if you don't want it to stay for the minutes set.\n`purge` - Deletes a certain amount of messages specified. [Maximum deleted messages: 100]\n`lock` - Locks a channel for a specified time, by disabling @ everyone 'Send Messages' permission. E.g. [PREFIX]lock 2m ")
    .addField("__**1.2.** General Commands:__", "`avatar/av` - Fetches the avatar of the mentioned user.\n`ping` - Pong. Responds with the Bot Latency.\n`slowmode` - Sets the rate limit per user, via a number in (s). For e.g. [PREFIX]slowmode 0 or [PREFIX]slowmode 10.\n`whois/userinfo` -  Gives information of the user mentioned.\n`addrole` - Adds a role specified.\n`removerole` - Removes a role specified. ")
    .addField("__**1.3.** Fun Commands:__", "`howcute/rateme` - Says how cute you are out of 10. \n`coinflip/cf` - Flips a coin. \n`meme` - Gets a random meme from reddit pages based on memes.\n`say` - Parrots a message that you wish. For e.g. [PREFIX]say [message]. Administator+ required.\n`snipe` - Displays the last deleted message. [Manage Messages+]\n`poll` - **[Prefix]poll** Should we do this? makes a poll in the same channel with the cross and tick emoji.")
    .addField("__**1.4.** Statistical Commands:__", "`setprefix` - Changes the prefix \n`uptime` - States how long I have been awake for. \n`botinfo` - Sends information about the application. \n`serverinfo`- Gives important information about the server, including server statistics. \n`commands/help` - Displays commands available.\n `membercount/mc` - States how many members there are in the server, with bots excluded **and** included.")

message.author.send(helplol)
message.channel.send(":e_mail: **You got a DM from me!**")
//if(err) return console.log(err), message.channel.send("Can't send DMs to you! Make sure that you have allowed DM's from Server Members!")

if(!args[0]){
     return
}

}
module.exports.config = {
    name: "help",
    aliases: ["commands", "cmds"]

} 

