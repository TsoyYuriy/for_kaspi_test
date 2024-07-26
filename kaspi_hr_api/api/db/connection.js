require("dotenv").config() // load .env variables
const mongoose = require("mongoose") //import fresh mongoose object
const {log} = require("mercedlogger")

const {DATABASE_URL} = process.env

// CONNECT TO MONGO
mongoose.connect(DATABASE_URL)

// CONNECTION EVENTS
mongoose.connection
  .on("open", () => log.green("DATABASE STATE", "Connection Open"))
  .on("close", () => log.magenta("DATABASE STATE", "Connection Closed"))
  .on("error", (error) => log.red("DATABASE STATE", error))

// EXPORT CONNECTION
module.exports = mongoose
