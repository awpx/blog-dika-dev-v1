import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import posts from './data/postsMocks.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/api/v1/posts', (req, res) => {
  res.json(posts)
})

app.get('/api/v1/posts/:id', (req, res) => {
  const post = posts.find((p) => p._id === req.params.id)
  res.json(post)
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))