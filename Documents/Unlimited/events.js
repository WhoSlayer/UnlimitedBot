const { readdirSync } = require("fs");
const join = require("path");
const filePath = join.join(__dirname, "..", "events");

module.exports.run = (bot) => {
    const eventFiles = readdirSync("./events/")
    for (const eventFile of eventFiles) {
        const  event = require(`./events/${eventFile}`)
        const eventName = eventFile.split(".").shift();
        bot.on(eventName,  event.bind(null, bot));
    }
  
    console.log(`Loaded ${eventFiles.length} events! `)
}