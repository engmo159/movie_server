import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import http from 'http'
import mongoose from 'mongoose'
import 'dotenv/config'
import routes from './src/routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', routes)
app.get('/', (req, res) => {
  res.send('Hello')
})

const port = process.env.PORT || 4000

// const server = http.createServer(app)
// mongoose.set('strictQuery', true)

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log('Mongodb connected')
//     server.listen(port, () => {
//       console.log(`Server is listening on port ${port}`)
//     })
//   })
//   .catch(err => {
//     console.log({ err })
//     process.exit(1)
//   })
mongoose
  .connect(process.env.MONGODB_URL || '')
  .then(() => console.log('Connected to DB!'))
  .catch(err => console.log('Connection Error!', err))
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
