var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Feeding = require('./feeding');

var ScheduledFeedingSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  location: {type:Schema.ObjectId, ref:'Location', required:true},
  scheduledTime: {type: Schema.ObjectId, ref: 'ScheduledTime', required:true},
  food: {type:Schema.ObjectId, ref:'Food', required:true},
  duckCount: {type:Number, required:true, min:1},
  feedAmount: {type:Number, required:true, min:1}
});

module.exports=mongoose.model('ScheduledFeeding', ScheduledFeedingSchema);
