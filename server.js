const path = require('path');
const express = require('express');
const server = express();

const mainRouter = require('./routes/main.js');

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(express.urlencoded({ extended: false}));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', mainRouter);


server.listen(8000);