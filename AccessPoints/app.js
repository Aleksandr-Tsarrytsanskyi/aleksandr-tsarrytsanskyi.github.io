var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var publicDir = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Перенаправляем старые ссылки с /public на чистые адреса.
app.use(function (req, res, next) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next();
  }

  var match = /^\/public(?=\/|\?|$)\/*([^?]*)(\?.*)?$/.exec(req.originalUrl);

  if (!match) {
    return next();
  }

  var pathname = match[1] === 'index.html' ? '' : match[1];
  var query = match[2] || '';

  return res.redirect(301, 'https://pesok-sochi.ru/' + pathname + query);
});

// Собранные CSS и JavaScript кешируются на сутки.
app.use('/dist', express.static(path.join(__dirname, 'dist'), {
  maxAge: '1d',
}));

// Изображения и шрифты кешируются на 30 дней.
app.use('/images', express.static(path.join(publicDir, 'images'), {
  maxAge: '30d',
}));

app.use('/fonts', express.static(path.join(publicDir, 'fonts'), {
  maxAge: '30d',
}));

// Остальные файлы из public доступны без префикса /public.
app.use(express.static(publicDir, {
  setHeaders: function (res, filePath) {
    if (/\.html?$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  },
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;