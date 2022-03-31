const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({
    disableEveryone: true
});
const fs = require("fs");
const report = require("./models/report.js")
/*const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/Reports', {
    useNewUrlParser: true
}, (err) => {
    if (err) return console.error(err)
});*/
const prefixes = require("./prefixes.json")

const events = require('./events.js');
events.run(bot);


bot.snipes = new Map();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 90000;

fs.readdir("./moderation/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    console.log(`Successfully loaded ${jsfile.length} files. [1/4]`);
    jsfile.forEach((f, i) => {
        let pull = require(`./moderation/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on('message', message => {

    const channel = bot.channels.cache.get("959218930000474163")
    let msg = new Discord.MessageEmbed()
        .setTitle(`A message has been sent by: ${message.author.tag}`)
        .setDescription(`${message.content}`)
        .setTimestamp()
        .setColor("#800080")
        .setFooter(`Taken from ${message.guild} • ${message.channel.name}`)
    if (message.content === "") return;
    channel.send(msg)

});

bot.on('messageDelete', message => {


    const e = bot.channels.cache.get('959218969796046859');
    const sweetembed = new Discord.MessageEmbed()

        .setTitle(`**Message deleted in ${message.guild}**`)
        .setDescription(`${message.content}`)
        .setAuthor(`Message sent by: ${message.author.tag}`)
        .setFooter(`${message.channel.name}`)
        .setTimestamp()
        .setThumbnail(`${message.author.avatarURL()}`)
        .setColor("#FF0000")

    if (message.content === "") return;
    e.send(sweetembed)

});

fs.readdir("./fun/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    console.log(`Successfully loaded ${jsfile.length} files. [2/4]`);
    jsfile.forEach((f, i) => {
        let pull = require(`./fun/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});



fs.readdir("./general/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    console.log(`Successfully loaded ${jsfile.length} files. [3/4]`);
    jsfile.forEach((f, i) => {
        let pull = require(`./general/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

fs.readdir("./statistics/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    console.log(`Successfully loaded ${jsfile.length} files. [4/4]`);
    jsfile.forEach((f, i) => {
        let pull = require(`./statistics/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

fs.readdir("./custom/", (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }

    console.log(`Successfully loaded ${jsfile.length} files. [4/4]`);
    jsfile.forEach((f, i) => {
        let pull = require(`./custom/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on('message', (message) => {


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))


 /*  if (message.guild.id) return
   if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        }
    }

*/
    //bot.prefix = prefixes[message.guild.id].prefixes
    bot.prefix = "!"

    const mention = new Discord.MessageEmbed()
        .setDescription(`**Unlimited's current prefix is assigned to: \`\`${bot.prefix}\`\` **`)
        .setColor("AQUA")

    if (message.mentions.users.size > 0) {
        if (message.mentions.users.first().id == bot.user.id) {
            message.channel.send(mention)
        }
    }

    if (message.content.startsWith(bot.prefix)) {
        let args = message.content.substring(bot.prefix.length).trim().split(/ +/g);
        let cmd = bot.commands.get(args[0].toLowerCase());
        if (cmd) return cmd.run(bot, message, args);
    }
});


bot.on("ready", () => {
    console.log(`${bot.user.username} is online.`)

    let statuses = [
        `${bot.guilds.cache.size} servers!`,
        `over ${bot.users.cache.size} users`,
        "my subjects. | !help",
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {
            type: 'PLAYING'
        });

    }, 3500)
});


bot.login(botconfig.token)