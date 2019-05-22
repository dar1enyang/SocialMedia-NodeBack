const express = require('express');
const {createPost, getPosts} = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
const { createPostValidaotr } = require('../validators');


const router = express.Router();
// Dont need to specify index

router.get('/', requireSignin, getPosts);
router.post('/post', createPostValidaotr, createPost);

module.exports = router;
