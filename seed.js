const Post = require('./models/postSchema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blogDb2', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection error'));
db.once('open', () => console.log('Database connection opened'));

const seedPosts = [
    {
        title: 'Javascript is lit!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
        author: 'Bryan',
    },
    {
        title: 'The Lakers are trash!',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
        author: 'Niko'
    },
    {
        title: 'Dogs are the best',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
        author: 'Hayden'
    },
];

Post.insertMany(seedPosts)
    .then(result => console.log(result))
    .catch(err => console.log(err));
