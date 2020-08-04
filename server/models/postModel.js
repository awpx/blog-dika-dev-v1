import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post