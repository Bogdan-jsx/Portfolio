const messageModel = require("../models/messageModel").model;

async function addMessage (message) {
    const newMessage = messageModel(message);
    return await newMessage.save();
}

async function getMessages () {
    const messages = await messageModel.find();
    return messages;
}

async function deleteMessage(id) {
    return await messageModel.findByIdAndDelete(id);
}

module.exports = {
    addMessage,
    getMessages,
    deleteMessage,
}
