const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
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

//serve frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/dist')))
//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
//     )
//   )
// } else if (process.env.NODE_ENV === 'development') {
//   app.get('/', (req, res) => res.send('Please set to production'))
// } else {
//   app.get('/', (req, res) => res.send('what are you doing'))
// }

app.listen(port, () => console.log(`server started at ${port}`))
