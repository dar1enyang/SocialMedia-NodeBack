const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();
// Dont need to specify index
const validator = require('../validators');
router.get('/', postController.getPosts);

router.post('/post', validator.createPostValidaotr, postController.createPost);

module.exports = router;
