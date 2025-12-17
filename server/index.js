require("dotenv").config()
const express = require("express")
const connectDB = require("./db/connect")
const app = express()
app.use(cors())
app.use(express.json())
app.listen("/", (req, res) => {
  res.send("welcome to buzz app")
})
app.listen(process.env.PORT || 3000, async () => {
  await connectDB(process.env.MONGO_URI)
  console.log(
    `server listening on port ${process.env.PORT ? process.env.PORT : 3000}`
  )
})
