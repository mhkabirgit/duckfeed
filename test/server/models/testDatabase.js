//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var config = require('config');
var chai = require('chai');
var assert = chai.assert;
var User = require('../../../server/models/user');
const serverDB = config.DBHost;

describe('Database Test', function(){

  before(function(){
    var db = mongoose.createConnection(serverDB, { useNewUrlParser: true });
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function(){
      console.log('DB connection opened');
    });
  });

  var user =new User({"username":"testuser1", "email":"email@test.com", "password":"password"});

  describe('User Model Tests', function(){

    it('Will save a new User', function(){
      user.save();
    });

    it('Will find a User', function(){
      User.findOne({'username':user.username})
      .exec(function(err, found) {
        if(err){
          console.log(err);
        }
        assert.equal(user.username, found.username);
      });

    });
  });

  after(function(){
      mongoose.disconnect();
  });

});
