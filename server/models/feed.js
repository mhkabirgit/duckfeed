var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  longitude: {type:Number, required:true},
  latitude: {type:Number, required:true},
  time: {type: Date, required:true},
  food: {type:Schema.ObjectId, ref:'Food', required:true},
  duckCount: {type:Number, required:true},
  feedAmount: {type:Number, required:true}
});

module.exports=mongoose.model('Feed', FeedSchema);
