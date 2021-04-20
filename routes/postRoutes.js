const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/postControllers');

// /posts
router.route('/')
    .get(postControllers.renderPosts)
    .post(postControllers.createPost);

//posts/:id/update
router.route('/:id/update')
    .put(postControllers.createPost);

//posts/:id/delete
router.route('/:id/delete')
    .delete(postControllers.deletePost);

module.exports = router;

