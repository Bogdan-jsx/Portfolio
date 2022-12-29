const dotenv = require("dotenv");
dotenv.config();

const bot = require("./telegramBot").bot;

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const controllers = require("./controllers");

app.use(cors());

mongoose.set("strictQuery", false);

mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bot.launch();

controllers(app);

app.listen(process.env.PORT, () => {
  console.log("Success!");
});