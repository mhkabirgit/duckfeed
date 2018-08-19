const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

var Feed = require('../models/feed');

module.exports.all = function(req, res, next) {
  Feed.find({}, 'user longitude latitude time food duckCount feedAmount')
    .populate('user')
    .populate('food')
    .exec(function (err, feeds) {
      if (err) { return next(err); }
        //Successful, so send the response
        return res.status(200).json({feeds: feeds});
    });
};

module.exports.detail = function(req, res,next) {
  Feed.findById(req.params.id)
  .populate(user)
  .populate(food)
  .exec(function(err, feed){
        if(err) {
            return next(err);
        }
        if(feed==null) {
            var err = new Error('Feed not found');
            err.status = 404;
            return next(err);
        }
        else {
            return res.status(200).json({feed:feed});
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
                var feed = new Feed(
                  { user: req.body.user,
                    longitude: req.body.longitude,
                    latitude: req.body.latitude,
                    time: time,
                    food: req.body.food,
                    duckCount: req.body.duckCount,
                    feedAmount: req.body.feedAmount
                   });
                feed.save(function (err) {
                    if (err) { return next(err); }
                       return res.status(200).json({feed:feed});
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
        let time = new Date(req.body.time);
        var feed = new Feed(
                { user: req.body.user,
                  longitude: req.body.longitude,
                  latitude: req.body.latitude,
                  time: time,
                  food: req.body.food,
                  duckCount: req.body.duckCount,
                  feedAmount: req.body.feedAmount
                 });
        Feed.findByIdAndUpdate(req.params.id, feed, {}, function (err,feed) {
                     if (err) { return next(err); }
                        // Successful - redirect to book detail page.
                        return res.status(200).json({feed:feed});
                     });
           }
    }

];

module.exports.delete = function (req, res, next) {
  Feed.findByIdAndRemove(req.params.id)
  .exec(function(err, food) {
    if(err) {
      return next(err);
    }
    return res.status(200).json({status: 'success'});
  });
};

module.exports.topfoods = function(req, res, next){
  Food.aggregate(
    [{"$group": {_id: "$food", "count": {$sum:1}}},
      {"$sort": {"count":-1}}])
      .limit(20)
      .excec(function(err, topfoods) {
        if(err){ return next(err)}
        return res.status(200).json(topfoods);
      });
