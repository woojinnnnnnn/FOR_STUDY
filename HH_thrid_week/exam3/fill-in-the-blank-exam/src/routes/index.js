import express from 'express';
import Likes from './likes.js';
import Comments from './comments.js';
import Posts from './posts.js';
import Login from './login.js';
import SignUp from './signup.js';

const router = express.Router();

router.use('/likes', Likes);
router.use('/comments', Comments);
router.use('/posts', Posts);
router.use('/login', Login);
router.use('/signup', SignUp);

export default router;
