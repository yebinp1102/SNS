import express from 'express'

// handlers
import { getPosts, createPost } from '../controllers/posts.mjs';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);


export default router;