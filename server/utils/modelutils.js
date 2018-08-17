var Feeding = require('../models/feeding');

module.exports.getFeedingFromScheduled = function(date, scheduledfeeding){
  date.setHours(scheduledfeeding.scheduledTime.hours);
  date.setMinutes(scheduledfeeding.scheduledTime.minutes);
  date.setSeconds(scheduledfeeding.scheduledTime.seconds);
  return new Feeding({user:scheduledfeeding.user,
                      longitude:scheduledfeeding.longitude,
                      latitude:scheduledfeeding.latitude,
                      time: date,
                      food:scheduledfeeding.food,
                      duckCount: scheduledfeeding.duckCount,
                      feedAmount: scheduledfeeding.feedAmount});
}
