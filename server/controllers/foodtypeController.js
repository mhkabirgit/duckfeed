var async = require('async');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');

var FoodType = require('../models/foodtype');
var Food = require('../models/food');

module.exports.all = function(req, res, next) {
  FoodType.find({})
  .exec(function(err, foodtypes){
    if(err) {
      return next(err);
    }
    else {
      return res.status(200).json({foodtypes: foodtypes});
    }
  });
};

module.exports.detail = function(req, res,next) {
  FoodType.findById(req.params.id)
               .exec(function(err, foodtype){
                 if(err) {
                   return next(err);
                 }
                 if(foodtype==null) {
                   var err = new Error('Food type not found');
                   err.status = 404;
                   return next(err);
                 }
                 else {
                   return res.status(200).json({foodtype:foodtype});
                 }
        });
  };


module.exports.add = [

  body('name', 'Food type name required').isLength({min:1}).trim(),

  sanitizeBody('name').trim().escape(),

  (req, res, next) => {
    var foodtype = new FoodType({name: req.body.name});
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({error: 'Bad Request'});
    }
    else {
      FoodType.findOne({name: foodtype.name})
      .exec(function(err, found){
          if(err) {
            return next(err);
          }
          if(found) {
            return res.status(400).json({error: 'This Food Type Exists'});
          }
          else {
            foodtype.save(function(err) {
              if(err) {
                return next(err);
              }
              else{
                return res.status(200).json({foodtype:foodtype});
              }
            });
          }
      });
    }
  }
];


module.exports.update = [

  body('name', 'Name is required').isLength({min:1}).trim(),

  sanitizeBody('*').trim().escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({error: 'Bad Request'});
    }
    else {
      FoodType.findByIdAndUpdate(req.params.id, {name: req.body.name}, {}, function(err, foodtype){
        if(err){
          return next(err);
        }
        return res.status(200).json({foodtype: foodtype});
      });
      }
    }
];



module.exports.delete = function (req, res, next) {
  async.parallel({
        foodtype: function(callback) {
            FoodType.findById(req.params.id)
              .exec(callback);
        },

        foods: function(callback) {
          Food.find({ 'type': req.params.id })
          .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.foodtype==null) { // No results.
            var err = new Error('Food type not found to delete.');
            err.status = 404;
            return next(err);
        }
        if(results.foods.length>0){
          return res.status(400).json({error: 'This food type has food, cannot be deleted'} );
        }
        else{
          FoodType.findByIdAndRemove(results.foodtype.id)
          .exec(function(err){
            if(err) {
              return next(err);
            }
            else {
              return res.status(200).json({status:'success'});
            }
          });
        }
    });
};
