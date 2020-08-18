import express from 'express'
import { 
  getPostById, 
  getPostCode, 
  getPostEssay, 
  getPostHobby, 
  getPosts,
  deletePost, 
  createPost,
  updatePost,
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/').get(getPosts).post(protect, createPost)
router.route('/code').get(getPostCode)
router.route('/essay').get(getPostEssay)
router.route('/hobby').get(getPostHobby)
router
  .route('/:id')
  .get(getPostById)
  .delete(protect, deletePost)
  .put(protect, updatePost)

export default router