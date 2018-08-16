var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  longitude: {type:Number, required:true},
  latitude: {type:Number, required:true}
});

module.exports =mongoose.model('Location', LocationSchema);
