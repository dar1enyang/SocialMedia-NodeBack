const express = require('express');
const {createPost, getPosts} = require('../controllers/post');
const { createPostValidaotr } = require('../validators');


const router = express.Router();
// Dont need to specify index
router.get('/', getPosts);

router.post('/post', createPostValidaotr, createPost);

module.exports = router;
