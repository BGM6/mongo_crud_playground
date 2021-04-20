const Post = require('../models/postSchema');

//Create
module.exports.createPost = async (req, res) => {
    // const {title, content, author} = req.body;
    const newPost = new Post(req.body);
    await newPost.save();
    res.redirect('/posts');
};

//Read
module.exports.renderPosts = async (req, res) => {
    const post = await Post.find({});
    res.send(post);
};

//Update
module.exports.updatePost = async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true,
    });
    res.redirect('/posts');
};

//Delete
module.exports.deletePost = async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect('/posts');
};

