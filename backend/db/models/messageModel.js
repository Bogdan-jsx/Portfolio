const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        required: true,
    }
})

module.exports = {
    model: mongoose.model("message", messageSchema),
    schema: messageSchema,
}