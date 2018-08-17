var Feeding = require('../models/feeding');

module.exports.getFeedingFromScheduled = function(date, scheduledfeeding){
  date.setHours(scheduledfeeding.hours);
  date.setMinutes(scheduledfeeding.minutes);
  date.setSeconds(scheduledfeeding.seconds);
  return new Feeding({user:scheduledfeeding.user,
                      longitude:scheduledfeeding.longitude,
                      latitude:scheduledfeeding.latitude,
                      time: date,
                      food:scheduledfeeding.food,
                      duckCount: scheduledfeeding.duckCount,
                      feedAmount: scheduledfeeding.feedAmount});
}
