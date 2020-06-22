import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'

const app = express()

mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ status: 'Server running on http://localhost:3333' })
})

app.use(routes)

app.listen(3333)
