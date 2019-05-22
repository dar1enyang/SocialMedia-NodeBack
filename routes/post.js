const express = require('express');
const {createPost, getPosts} = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
const { createPostValidaotr } = require('../validators');
const { userById } = require('../controllers/user');

const router = express.Router();
// Dont need to specify index

router.get('/', requireSignin, getPosts);
router.post('/post', requireSignin, createPostValidaotr, createPost);


// any route containing :userId, app will first execute userByID()
router.param('userId', userById);





module.exports = router;
