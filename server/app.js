var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var cors = require('cors');

const serverDb = require('./config/server').db;

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

var app = express();

mongoose.createConnection(serverDb, { useNewUrlParser: true });
mongoose.Promise=global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection Error'));
db.once("open", function(){console.log('MongoDB Connection succeded')});

app.use(cors({origin:['http://localhost:3005'],
    methods:['GET','POST'],
    credentials: true }));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  key: 'user_sid',
  secret:'bestsecretnosecret',
  resave: true,
  saveUninitialized:true,
  cookie: {expires: 600000}
}));

// Previously logged in user might have might have sent the cookie saved in its browser
// Howeever, the application might have removed user session due to its long inactivity
// Need to request the browser to remove the stale cookie
app.use((req, res, next) => {
  if(req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
    next();
  }
  else {
    next();
  }
});

var sessionChecker = (req, res, next) => {
  if(req.session.user && req.cookies.user_sid) {
    return next();
  }
  else {
      res.json({statusCode:401, title: 'Unauthorized'});
  }
};


app.use('/', indexRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
