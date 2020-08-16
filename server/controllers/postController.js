import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'


//@desc       Fetch all post
//@route      GET /api/v1/posts
//@access     public
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})

  res.json(posts)
})

//@desc       Fetch all post category code
//@route      GET /api/v1/posts/code
//@access     public
export const getPostCode = asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: 'code' })

  if(posts) {
    res.json(posts)
  } else {
    res.status(404)
    throw new Error(`Post not found`)
  }
})

//@desc       Fetch all post category essay
//@route      GET /api/v1/posts/code
//@access     public
export const getPostEssay = asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: 'essay' })

  if(posts) {
    res.json(posts)
  } else {
    res.status(404)
    throw new Error(`Post not found`)
  }
})

//@desc       Fetch all post category hobby
//@route      GET /api/v1/posts/code
//@access     public
export const getPostHobby = asyncHandler(async (req, res) => {
  const posts = await Post.find({ category: 'hobby' })

  if(posts) {
    res.json(posts)
  } else {
    res.status(404)
    throw new Error(`Post not found`)
  }
})

//@desc       Fetch single post
//@route      GET /api/v1/posts/:id
//@access     public
export const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if(post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error(`Post not found`)
  }
})

//@desc       delete post
//@route      DELETE /api/v1/posts/:id
//@access     private
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if(post) {
    await post.remove()
    res.json({message: 'post removed'})
  } else {
    res.status(404)
    throw new Error(`Post not found`)
  }
})


