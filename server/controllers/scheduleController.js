const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

var Schedule = require('../models/schedule');
var Feed = require('../models/feed');
var getFeedingFromSchedule = require('../utils/modelutils').getFeedingFromSchedule;

module.exports.all = function(req, res, next) {
  Schedule.find({}, 'user longitude latitude hours minutes seconds food duckCount feedAmount startDate endDate')
    .populate('user')
    .populate('food')
    .exec(function (err, schedules) {
      if (err) { return next(err); }
      //Successful, so send the response
      return res.status(200).json({schedules: schedules});
    });
};

module.exports.detail = function(req, res,next) {
  Schedule.findById(req.params.id)
  .populate('user')
  .populate('food')
  .exec(function(err, schedule){
        if(err) {
            return next(err);
        }
        if(schedule==null) {
            var err = new Error('Schedule not found');
            err.status = 404;
            return next(err);
        }
        else {
            return res.status(200).json({schedule:schedule});
        }
        });
  };


module.exports.add = [
    // Validate fields.
    body('user', 'User must not be empty.').isLength({ min: 1 }).trim(),
    body('longitude', 'Location longitude must not be empty.'),
    body('latitude', 'Location latitude must not be empty.'),
    body('time', 'Time must not be empty.'),
    body('food', 'Food must not be empty.'),
    body('duckCount', 'Duck count must not be empty.'),
    body('feedAmount', 'Feed amount must not be empty.'),


    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            return res.status(400).json({errors: errors.array()});
        }
        else {
                let time = new Date(req.body.time);
                let hours = time.getHours();
                let minutes = time.getMinutes();
                let seconds = time.getSeconds();
                let startDate = new Date();
                var schedule = new Schedule(
                  { user: req.body.user,
                    longitude: req.body.longitude,
                    latitude: req.body.latitude,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds,
                    food: req.body.food,
                    duckCount: req.body.duckCount,
                    feedAmount: req.body.feedAmount,
                    startDate: startDate,
                    endDate:''
                   });
                schedule.save(function (err) {
                    if (err) { return next(err); }
                       return res.status(200).json({schedule:schedule});
                    });
                }
      }
];

module.exports.update = [

  // Validate fields.
  body('user', 'User must not be empty.').isLength({ min: 1 }).trim(),
  body('longitude', 'Location longitude must not be empty.'),
  body('latitude', 'Location latitude must not be empty.'),
  body('time', 'Time must not be empty.'),
  body('food', 'Food must not be empty.'),
  body('duckCount', 'Duck count must not be empty.'),
  body('feedAmount', 'Feed amount must not be empty.'),

  // Sanitize fields (using wildcard).
  sanitizeBody('*').trim().escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          // There are errors. Render form again with sanitized values/error messages.
          return res.status(400).json({errors: errors.array()});
      }
      else {
        Schedule.findById(req.params.id)
        .exec(function(err, found){
              if(err) {
                  return next(err);
              }
              if(found==null) {
                  var err = new Error('Schedule not found');
                  err.status = 404;
                  return next(err);
              }
              else {
                  let startDate = found.startDate;
                  let time = new Date(req.body.time);
                  let hours = time.getHours();
                  let minutes = time.getMinutes();
                  let seconds = time.getSeconds();
                  var schedule = new Schedule(
                    { user: req.body.user,
                      longitude: req.body.longitude,
                      latitude: req.body.latitude,
                      hours: hours,
                      minutes: minutes,
                      seconds: seconds,
                      food: req.body.food,
                      duckCount: req.body.duckCount,
                      feedAmount: req.body.feedAmount,
                      startDate: startDate,
                      endDate:''
                     });
                  Schedule.findByIdAndUpdate(req.params.id, schedule, {}, function (err,schedule) {
                               if (err) { return next(err); }
                                  // Successful - redirect to book detail page.
                                  return res.status(200).json({schedule:schedule});
                                });
              }
              });
           }
    }
];

module.exports.delete = function (req, res, next) {
  Schedule.findByIdAndRemove(req.params.id)
  .exec(function(err, food) {
    if(err) {
      return next(err);
    }
    return res.status(200).json({status:'success'});
  });
};

module.exports.confirm = function(req, res,next) {
  Schedule.findById(req.params.id)
  .exec(function(err, schedule){
        if(err) {
            return next(err);
        }
        if(schedule==null) {
            var err = new Error('Schedule not found');
            err.status = 404;
            return next(err);
        }
        else {
          let date = new Date(req.body.date);
          let feed = getFeedFromSchedule(date, schedule);
          feed.save(function (err) {
              if (err) { return next(err); }
                 return res.status(200).json({feed:feed});
              });
          }
        });
  };

  module.exports.cancel = function(req, res,next) {
    Schedule.findById(req.params.id)
    .exec(function(err, schedule){
          if(err) {
              return next(err);
          }
          if(schedule==null) {
              var err = new Error('Schedule not found');
              err.status = 404;
              return next(err);
          }
          else {
            let date = new Date();
            let endSchedule = {...schedule, endDate: date};
            Schedule.findByIdAndUpdate(req.params.id, endSchedule, {}, function (err,schedule) {
                         if (err) { return next(err); }
                            // Successful - redirect to book detail page.
                            return res.status(200).json({schedule:schedule});
                          });
            }
          });
    };
