const mongoose = require("mongoose")

const config = new mongoose.Schema({
    guildID: String,
    prefix: {
        default: '!',
        type: String
    }
})

module.exports = mongoose.model("Guild", config);