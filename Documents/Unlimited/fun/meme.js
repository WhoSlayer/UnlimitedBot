const Discord = require('discord.js')
const {
    getMember,
    formatDate
} = require("../functions.js");
const api = require("imageapi.js")
const colour = require("../colours.json")
const client = new Discord.Client()


module.exports.run = async(bot, message, args) => {

    let reddit = [
        "meme",
        "memes",
        "dankmemes",
        "meirl",
        "me_irl"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    let img = await api(subreddit)
    message.channel.send("Hello")

    const member = getMember(message, args.join(" "));

    message.channel.startTyping()
    const thebed = new Discord.MessageEmbed()
        .setTitle(`Provided by: r/${subreddit}`)
        .setColor(`${colour.MAGENTA}`)
        .setURL(`https://www.reddit.com/r/${subreddit}`)
        .setFooter(`Requested by ${member.user.tag}`)
        .setImage(img)
        .setTimestamp()
    message.channel.stopTyping()


    api(subreddit).then(async (url) => {
        message.channel.send(thebed)
        if (url.endsWith(".mp4")) {
            return;
        }

    }).catch(err => console.error(err));

};

module.exports.config = {
    name: "meme",
    aliases: ["m"]
}