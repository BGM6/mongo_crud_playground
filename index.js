'use strict';
const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();
const postRoutes = require('./routes/postRoutes');

mongoose.connect('mongodb://localhost:27017/blogDb2', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// .then(() => console.log('Connected'))
// .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection error'));
db.once('open', () => console.log('Database connection opened'));


//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Homepage');
// });

//Routes

//localhost:5000/posts
app.use('/posts', postRoutes);


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

