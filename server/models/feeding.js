var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedingSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  location: {type:Schema.ObjectId, ref:'Location', required:true},
  time: {type: Date, required:true},
  food: {type:Schema.ObjectId, ref:'Food', required:true},
  duckCount: {type:Number, required:true},
  feedAmount: {type:Number, required:true}
});

module.exports=mongoose.model('Feeding', FeedingSchema);
