var Feeding = require('../models/feeding');

module.exports.getFeedingFromSchedule = function(date, schedule){
  date.setHours(schedule.hours);
  date.setMinutes(schedule.minutes);
  date.setSeconds(schedule.seconds);
  return new Feeding({user:schedule.user,
                      longitude:schedule.longitude,
                      latitude:schedule.latitude,
                      time: date,
                      food:schedule.food,
                      duckCount: schedule.duckCount,
                      feedAmount: schedule.feedAmount});
}
