import express from 'express'
// handlers
import { signin, signup } from '../controllers/user.mjs';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;