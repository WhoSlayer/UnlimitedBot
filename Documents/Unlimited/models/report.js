const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    userID: String,
    reason: String,
    rUsername: String,
    rUserID: String,
    time: String,
    serverID: String
});

module.exports = mongoose.model("Report", reportSchema);