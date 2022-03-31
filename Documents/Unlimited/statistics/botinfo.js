const Discord = require("discord.js")
const bot = new Discord.Client()
const {
    promptMessage
} = require("../functions.js")

module.exports.run = async (bot, message, args) => {

    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);    

let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

const slayer = new Discord.MessageEmbed()
.setTitle("Bot Information:")
.setColor("RANDOM")
.setThumbnail("https://images-ext-1.discordapp.net/external/68Q_bMlp8vjjbQgh-MB1cUuhWn3Y1SKP0Il7v5wtK2c/https/cdn.discordapp.com/avatars/705086721737359502/dead45d157cb714f1bd200ca28ad7564.webp")
.addField("Properties:", "**Developer:** Slayer#2754\n**Bot name:** Unlimited#4293")
.addField("URLs:", "[**Support Server**](https://discord.gg/yDB2Ekv) \n[**Bot Invite**](https://discord.com/api/oauth2/authorize?client_id=705086721737359502&permissions=2147479030&scope=bot)")
.addField("Bot Statistics:", `**Members:** ${bot.users.cache.size}\n**Guilds:** ${bot.guilds.cache.size}\n**Creation date:** April 29 2020\n**Online for:** ${uptime}`)

message.channel.send(slayer)
}

module.exports.config = {
    name: "botinfo",
    aliases: ["info", "invite", "about"]
}