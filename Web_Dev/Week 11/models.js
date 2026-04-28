const mongoose = require("mongoose");
// mongoose Schema and model object
// NOTE: Mongoose makes it a little bit string when it comes to schema.
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
});

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Types.ObjectId
});

const userModel = mongoose.model("users", UserSchema);
const todoModel = mongoose.model("todos", TodoSchema);

module.exports = {
    userModel,
    todoModel
}