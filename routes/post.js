const express = require('express');
const {
  createPost,
  getPosts,
  postsByUser,
  postById,
  isPoster,
  deletePost,
  updatePost,
  photo,
  singlePost,
  like,
  unlike
} = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
const { createPostValidaotr } = require('../validators');
const { userById } = require('../controllers/user');

const router = express.Router();
// Dont need to specify index

router.get('/posts', getPosts);

// like unlike
router.put('/post/like', requireSignin, like);
router.put('/post/unlike', requireSignin, unlike);

router.post(
  '/post/new/:userId',
  requireSignin,
  createPost,
  createPostValidaotr
);
router.get('/posts/by/:userId', requireSignin, postsByUser);
router.get('/post/:postId', singlePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);
router.put('/post/:postId', requireSignin, isPoster, updatePost);
// photo
router.get('/post/photo/:postId', photo);

// any route containing :userId, app will first execute userByID()
router.param('userId', userById);
// any route containing :postById, app will first execute postById()
router.param('postId', postById);

module.exports = router;
