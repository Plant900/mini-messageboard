const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const router = require('./routes/messageRoutes')
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/messages', router)

app.listen(port, () => console.log(`server started at ${port}`))
