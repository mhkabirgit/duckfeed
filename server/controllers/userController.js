var bcrypt = require('bcrypt');
var session = require('express-session');

const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

var User = require('../models/user');

const getClearUser = (user) => {
  return {_id: user._id, username: user.username, email: user.email};
}

module.exports.create_user_post = [

  body('username', 'Username must not be empty').isLength({min:1}).trim(),
  body('email', 'Email must not be empty').isLength({min:1}).trim(),
  body('password', 'Password must not be empty').isLength({min:1}).trim(),
  body('passwordcnf', 'Password confirmation must not be empty').isLength({min:1}).trim(),

  sanitizeBody('*').trim().escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(400).json({error:'Bad Request'});
    }
    User.findOne({email:req.body.email})
    .exec(function(err, found) {
      if(err) {
        return next(err);
      }
      if(found) {
        res.status(400).json({error:'User exists with the same email'});
      }
    });

    User.findOne({username:req.body.username})
    .exec(function(err, found) {
      if(err) {
        return next(err);
      }
      if(found) {
        var error = new Error();
        res.status(400).json({error:'User exists with the same username'});
      }
    });

    if(req.body.password !== req.body.passwordcnf) {
      res.status(400).json({error:'Password and Password Confirmation did not match'});
    }

    bcrypt.hash(req.body.password, 10, function(err, hash) {
      if(err) {
        return next(err);
      }
      var user = new User ({
        username:req.body.username,
        email: req.body.email,
        password: hash
      });
      user.save(function (err) {
        if(err) {
          return next(err);
        }
        res.status(200).json(getClearUser(user));
      });
    });
  }

];


module.exports.signin_post = function(req, res, next) {

  if(req.body.email && req.body.password) {
    sanitizeBody('email').trim();
    sanitizeBody('password').trim();
    User.authenticate(req.body.email, req.body.password, function(err, user) {
      if(err){
        return next(err);
      }
      if(!user) {
        res.status(401).json({error: 'User does not exists'});
      }
      else {
        req.session.user=user;
        res.status(200).json(getClearUser(user));
      }
    });
  }
  else {
    res.status(401).json({error: 'Email and password are required.'});
  }
};


module.exports.signout_post = function (req, res, next) {

  if(req.session.user && req.cookies.user_sid) {
    const user = req.session.user;
    res.clearCookie('user_sid');
    res.status(200).json(getClearUser(user));
  }
  else {
    res.status(400).json({error:'You are not signed in'});
  }
};
