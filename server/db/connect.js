const mongoose = require("mongoose")
async function connectDB(url) {
  try {
    await mongoose.connect(url)
    console.log("db connected")
  } catch (err) {
    console.error(err.message)
  }
}
module.exports = connectDB
