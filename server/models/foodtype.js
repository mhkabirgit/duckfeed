var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodTypeSchema = new Schema({
  name:{type:String, unique: true, required: true, trim:true}
});

module.exports=mongoose.model('FoodType', FoodTypeSchema);
