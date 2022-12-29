const worksController = require("./worksController");
const messagesController = require("./messagesController");

module.exports = (app) => {
    app.use("/works", worksController());
    app.use("/messages", messagesController());
}