const dotenv = require("dotenv");
dotenv.config();

const bot = require("./telegramBot").bot;

const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require("@adminjs/mongoose");
const mongoose = require("mongoose");
const controllers = require("./controllers");

const workModel = require("./db/models/workModel").model;
const messageModel = require("./db/models/messageModel").model;

app.use(cors());

mongoose.set("strictQuery", false);

mongoose.connect(`${process.env.DB_HOST}${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cookieParser());

bot.launch(); // Telegram bot launch

// Start creating admin panel

const authenticate = (email, password) => { // Authenticating method
  if (email === process.env.ADMIN_NAME && password === process.env.ADMIN_PASSWORD) {
    return Promise.resolve({ email: process.env.ADMIN_NAME, password: process.env.ADMIN_PASSWORD })
  }
  return null;
}

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const adminOptions = {
  resources: [workModel, messageModel],
}

const admin = new AdminJS(adminOptions)

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: "sessionsecret",
  },
  null
)
app.use(admin.options.rootPath, adminRouter)

console.log(`AdminJS started on http://localhost:${process.env.PORT}${admin.options.rootPath}`)

// Finish creating admin panel

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

controllers(app);

app.listen(process.env.PORT, () => {
  console.log("Success!");
});