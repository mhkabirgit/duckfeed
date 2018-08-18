var async = require('async');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

var Food = require('../models/food');
var Feed = require('../models/feed');
var Schedule = require('../models/schedule');

module.exports.all = function(req, res, next) {
  Food.find({}, 'name type description')
    .populate('type')
    .exec(function (err, foods) {
      if (err) { return next(err); }
      //Successful, so send the response
      return res.status(200).json({foods: foods});
    });
};

module.exports.detail = function(req, res,next) {
  Food.findById(req.params.id)
  .populate(type)
  .exec(function(err, food){
        if(err) {
            return next(err);
        }
        if(food==null) {
            var err = new Error('Food not found');
            err.status = 404;
            return next(err);
        }
        else {
            return res.status(200).json({food:food});
        }
        });
  };


module.exports.add = [
    // Validate fields.
    body('name', 'Name must not be empty.').isLength({ min: 1 }).trim(),
    body('type', 'Type must not be empty.').isLength({ min: 1 }).trim(),
    body('description', 'Synopsis must not be empty.').trim(),

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
          Food.findOne({name: req.body.name, type:req.body.type})
          .exec(function(err, found){
              if(err) {
                return next(err);
              }
              if(found) {
                return res.status(400).json({error: 'This Food Exists'});
              }
              else {
                var food = new Food(
                  { name: req.body.name,
                    type: req.body.type,
                    description: req.body.description
                   });
                food.save(function (err) {
                    if (err) { return next(err); }
                       return res.status(200).json({food:food});
                    });
                }
          });
        }
      }
];

module.exports.update = [

  // Validate fields.
  body('name', 'Name must not be empty.').isLength({ min: 1 }).trim(),
  body('type', 'Type must not be empty.').isLength({ min: 1 }).trim(),
  body('description', 'Synopsis must not be empty.').trim(),

  // Sanitize fields (using wildcard).
  sanitizeBody('*').trim().escape(),
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            return res.status(400).json({errors: errors.array() });
        }
        else {
          // Create a Food object with escaped/trimmed data and old id.
            var food = new Food(
              { name: req.body.name,
                type: req.body.type,
                description: req.body.description
               });

            // Data from form is valid. Update the record.
            Food.findByIdAndUpdate(req.params.id, food, {}, function (err,food) {
                if (err) { return next(err); }
                   // Successful - redirect to book detail page.
                   return res.status(200).json({food:food});
                });
        }
    }
];

module.exports.delete = function (req, res, next) {
  async.parallel({
        food: function(callback) {
            Food.findById(req.params.id)
              .exec(callback);
        },

        feeds: function(callback) {
          Feed.find({ 'food': req.params.id })
          .exec(callback);
        },
        schedules: function(callback) {
          Schedule.find({ 'food': req.params.id })
          .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.food==null) { // No results.
            var err = new Error('Food not found to delete.');
            err.status = 404;
            return next(err);
        }
        if(results.feeds.length>0){
          return res.status(400).json({error: 'This food has feed, cannot be deleted'} );
        }
        else if(results.schedules.length>0){
          return res.status(400).json({error: 'This food has schedule, cannot be deleted'} );
        }
        else{
          Food.findByIdAndRemove(results.food.id)
          .exec(function(err){
            if(err) {
              return next(err);
            }
            else {
              return res.status(200).json({status: 'success'});
            }
          });
        }
    });
  };
