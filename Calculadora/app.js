var express = require('express');
var app = express();
var path=require('path')

var index = require('./routes/index');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', (__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use('/', index, );


module.exports = app;
