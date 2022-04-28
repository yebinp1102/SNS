import express from 'express'

// handlers
import { getPosts, createPost, updatePost } from '../controllers/posts.mjs';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)


export default router;