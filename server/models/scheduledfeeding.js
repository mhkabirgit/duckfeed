var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Feeding = require('./feeding');

var ScheduledFeedingSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  longitude: {type:Number, required:true},
  latitude: {type:Number, required:true},
  hours:{type:Number, required:true, min:0, max:23},
  minutes: {type: Number, required:true, min:0, max:59},
  seconds: {type: Number, min:0, max:59},
  food: {type:Schema.ObjectId, ref:'Food', required:true},
  duckCount: {type:Number, required:true, min:1},
  feedAmount: {type:Number, required:true, min:1}
});

module.exports=mongoose.model('ScheduledFeeding', ScheduledFeedingSchema);
