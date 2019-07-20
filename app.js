var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const FeedbackRouter = require('./routes/feedback');
const HeroesRouter = require('./routes/heroes');

var app = express();
app.listen(3000, function(){
    console.log('Server is running on port ', this.address().port)
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feedback', FeedbackRouter);
app.use('/heroes', HeroesRouter);

module.exports = app;
