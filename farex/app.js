var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let livereload = require('livereload');
let connectLivereload = require('connect-livereload');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersApiRouter = require('./routes/authRouter');
let publicDirectory = path.join(__dirname, "public");
var app = express();

const liveReLoadServer = livereload.createServer();
liveReLoadServer.watch(publicDirectory)

liveReLoadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReLoadServer.refresh("/");
    }, 100);
})

// view engine setup
app.use(connectLivereload());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authRouter', usersApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
