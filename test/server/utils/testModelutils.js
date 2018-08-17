//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var assert = chai.assert;
var User = require('../../../server/models/user');
var FoodType = require('../../../server/models/foodtype');
var Food = require('../../../server/models/food');
var Feeding = require('../../../server/models/feeding');
var ScheduledFeeding = require('../../../server/models/scheduledfeeding');
var getFeeding = require('../../../server/utils/modelutils').getFeedingFromScheduled;

describe('Model Utilities Tests', function(){
  const user = new User({username:'testuser', email:'email@test.com', password:'password'});
  const grain = new FoodType({name:'grain'});
  const rice =new Food({name:'rice',type:grain, description:'cracked rice'});
  const scheduledfeeding = new ScheduledFeeding({user: user, longitude:40.39, latitude:30.23, hours:10, minutes:30, seconds:0, food:rice, duckCount:10, feedAmount:5});
  var today = new Date(2018, 08, 25);
  const feeding = getFeeding(today, scheduledfeeding);
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
    assert.equal(rice.type.name, 'grain');
  });

  it('Created ScheduleFeeding has food type grain', function(){
    assert.equal(scheduledfeeding.food.type.name, 'grain');
  });

  it('Derived Feeding has food type grain', function(){
    assert.equal(feeding.food.type.name, 'grain');
  });

  it('Derived Feeding has time year 2018', function(){
    assert.equal(feeding.time.getFullYear(), 2018);
  });

  it('Derived Feeding has time hour 10', function(){
    assert.equal(feeding.time.getHours(), 10);
  });

});
