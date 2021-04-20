'use strict';
const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;
const app = express();

mongoose.connect('mongodb://localhost:27017/blogDb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection error'));
db.once('open', () => console.log('Database connection opened'));

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Homepage');
});


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

