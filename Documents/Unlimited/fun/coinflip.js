const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let headsandtails = [
        ":bust_in_silhouette: - **Heads!**",
        ":feet: - **Tails!**"
    ]

    const randomm = headsandtails[Math.floor(Math.random() * headsandtails.length)]
    message.channel.send(randomm)
}

module.exports.config = {
    name: "coinflip",
    aliases: ["cf", "flipacoin", "flip"]
}