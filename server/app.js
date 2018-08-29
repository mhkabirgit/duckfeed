var express = require('express');
var logger = require('morgan');
var config = require('config');
var path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var cors = require('cors');

const serverDb = config.DBHost;
const clientPort = config.ClientPort;
const corsOrigin = 'http://localhost:'+clientPort;

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var feedsRouter = require('./routes/feeds');

var app = express();

mongoose.connect(serverDb, { useNewUrlParser: true });
mongoose.Promise=global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection Error'));
db.once("open", function(){console.log('DB Connected')});

app.use(cors({origin:[corsOrigin],
        methods:['GET','POST'],
        credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
  key: 'user_sid',
  secret:'bestsecretnosecret',
  resave: true,
  saveUninitialized:true,
  cookie: {expires: 1200000}
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

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/feeds', feedsRouter);


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
  res.json('error');
});

module.exports = app;
