var threads = require('threads');
var Schedule = require('../models/schedule');
var Feed = require('../models/feed');
var getFeedingFromSchedule = require('../utils/modelutils').getFeedingFromSchedule;

const iterateSchedules = (done) => {
  Schedule.find({})
    .exec(function (err, schedules) {
      if (err) { return next(err); }
      //Successful, so send the response
      schedules.map((schedule, i) => {
        //Check whether the schedule has ended or not
        //Check whether it is valid according to confirmation business logic
        //If everything looks good, make a feed from the the schedule on today's date and scheduled timeout
        //Save the feed information into Feed schema
      });
    });
    done('Completed all the schedules');
}

const spawnScheduleThread = () => {
  let thread = threads.spawn(iterateSchedules((message)=>{
    console.log(message);
  }));
  thread.on('message', (message) => {
    console.log(message);
  });
}

module.exports = spawnScheduleThread;
