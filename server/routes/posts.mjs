import express from 'express'
// handlers
import { getPostsBySearch, getPost, getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.mjs';
// middleware
import auth from '../middleware/auth.mjs'

const router = express.Router();

router.get('/:id', getPost)
router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost)


export default router;