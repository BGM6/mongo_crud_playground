const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'You must provide a title']
    },
    content: String,
    author: String,
});

const Post = model('Post', postSchema);

module.exports = Post;