//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var assert = chai.assert;
var User = require('../../../server/models/user');
var FoodType = require('../../../server/models/foodtype');
var Food = require('../../../server/models/food');
var Feed = require('../../../server/models/feed');
var Schedule = require('../../../server/models/schedule');
var getFeeding = require('../../../server/utils/modelutils').getFeedFromSchedule;

describe('Model Utilities Tests', function(){
  var today = new Date(2018, 08, 25);
  const user = new User({username:'testuser', email:'email@test.com', password:'password'});
  const grain = new FoodType({name:'grain'});
  const rice =new Food({name:'rice',foodtype: grain, description:'cracked rice'});

  const schedule = new Schedule({user: user, longitude:40.39, latitude:30.23, hours:10, minutes:30, food:rice, duckCount:10, feedAmount:5, startDate:today});

  const feeding = getFeeding(today, schedule);
  it('Created User has username testuser', function(){
    assert.equal(user.username, 'testuser');
  });
  it('Created FoodType has name grain', function(){
    assert.equal(grain.name, 'grain');
  });
  it('Created Food has name rice', function(){
    assert.equal(rice.name, 'rice');
  });
  it('Created Food has type grain', function(){
    assert.equal(rice.foodtype.name, 'grain');
  });

  it('Created Schedule has food type grain', function(){
    assert.equal(schedule.food.foodtype.name, 'grain');
  });

  it('Derived Feeding has food type grain', function(){
    assert.equal(feeding.food.foodtype.name, 'grain');
  });

  it('Derived Feeding has time year 2018', function(){
    assert.equal(feeding.time.getFullYear(), 2018);
  });

  it('Derived Feeding has time hour 10', function(){
    assert.equal(feeding.time.getHours(), 10);
  });

});
