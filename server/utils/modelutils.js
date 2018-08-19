var Feed = require('../models/feed');

module.exports.getFeedFromSchedule = function(date, schedule){
  date.setHours(schedule.hours);
  date.setMinutes(schedule.minutes);
  return new Feed({user:schedule.user,
                      longitude:schedule.longitude,
                      latitude:schedule.latitude,
                      time: date,
                      food:schedule.food,
                      duckCount: schedule.duckCount,
                      feedAmount: schedule.feedAmount});
}
