import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import postRoutes from './routes/postRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/v1/posts', postRoutes)

//error handler
app.use(notFound) 
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))