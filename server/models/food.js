var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name:{type: String, unique:true, required:true, trim:true},
  type:{type:Schema.ObjectId, ref: 'FoodType', required: true},
  description: {type: String, trim: true},
});

module.exports=mongoose.model('Food', FoodSchema);
