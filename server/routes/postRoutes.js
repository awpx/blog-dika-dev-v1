import express from 'express'
import { 
  getPostById, 
  getPostCode, 
  getPostEssay, 
  getPostHobby, 
  getPosts 
} from '../controllers/postController.js'

const router = express.Router()


router.route('/').get(getPosts)
router.route('/code').get(getPostCode)
router.route('/essay').get(getPostEssay)
router.route('/hobby').get(getPostHobby)
router.route('/:id').get(getPostById)

export default router