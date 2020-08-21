import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/upload', uploadRoutes)

//static
const __dirname = path.resolve()

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//error handler
app.use(notFound) 
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))