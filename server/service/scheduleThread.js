var schedule = require('node-schedule');
var spawnScheduleThread = require('./spawnScheduleThread');

const scheduleThread = () => {
  /**
  CORN LIKE SCHEDULE
  *    *    *    *    *    *
  ┬    ┬    ┬    ┬    ┬    ┬
  │    │    │    │    │    │
  │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
  │    │    │    │    └───── month (1 - 12)
  │    │    │    └────────── day of month (1 - 31)
  │    │    └─────────────── hour (0 - 23)
  │    └──────────────────── minute (0 - 59)
  └───────────────────────── second (0 - 59, OPTIONAL)
  **/
    schedule.scheduleJob('* 10 0 * * *', spawnScheduleThread()); //Every night at 0:10 am
}

module.exports = scheduleThread;
