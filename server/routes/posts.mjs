import express from 'express'

// handlers
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.mjs';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)


export default router;