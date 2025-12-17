require("dotenv").config()
const express = require("express")
const connectDB = require("./db/connect")
const app = express()
app.listen(process.env.PORT || 3000, async () => {
  await connectDB()
  console.log(
    `server listening on port ${process.env.PORT ? process.env.PORT : 3000}`
  )
})
