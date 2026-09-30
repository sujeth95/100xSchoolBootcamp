const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String
})

const organizationSchema = mongoose.Schema({
    username: String,
    password: String,
    admin: mongoose.Types.ObjectId,
    members: [mongoose.Types.ObjectId]
})

const userModel = mongoose.model("users", userSchema);
const organizationModel = mongoose.model("organization", organizationSchema);

module.exports = {
    userModel,
    organizationModel
}