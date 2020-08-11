import express from 'express'
import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

const router = express.Router()

//@desc       Fetch all post
//@route      GET /api/v1/posts
//@access     public
router.get('/', asyncHandler(async (req, res) => {
  const posts = await Post.find({})

  res.json(posts)
}))

//@desc       Fetch all post category code
//@route      GET /api/v1/posts/code
//@access     public
router.get('/code', asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: 'code' })

  res.json(posts)
}))

//@desc       Fetch single post
//@route      GET /api/v1/posts/:id
//@access     public
router.get('/:id', asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if(post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error(`Post not found`)
  }

  
}))

export default router