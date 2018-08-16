var Feeding = require('../models/feeding');

module.exports.getFeedingFromScheduled = function(date, scheduledfeeding){
  date.setHours(scheduledfeeding.scheduledTime.hour);
  date.setMinutes(scheduledfeeding.scheduledTime.minute);
  date.setSeconds(scheduledfeeding.scheduledTime.second);
  return new Feeding({user:scheduledfeeding.user,
                      location:scheduledfeeding.location,
                      time: date, food:scheduledfeeding.food,
                      duckCount: scheduledfeeding.duckCount,
                      feedAmount: scheduledfeeding.feedAmount});
}
