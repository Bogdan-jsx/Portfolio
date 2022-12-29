const express = require("express");

const messagesRepository = require("../db/repositories/messageRepository");
const telegramBot = require("../telegramBot");

module.exports = () => {
    const router = express.Router();

    router.post("/", async (req, res) => {
        const { name, email, message } = req.body;
        const createDate = new Date();
        const messageObj = { name, email, message, createDate };

        telegramBot.sendMessage(messageObj);

        await messagesRepository.addMessage(messageObj);
        res.sendStatus(200);
    })

    return router;
}