var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var ScheduledTimeSchema = new Schema ({
  hours:{type:Number, required:true, min:0, max:23},
  minutes: {type: Number, required:true, min:0, max:59},
  seconds: {type: Number, min:0, max:59}
});

module.exports=mongoose.model('ScheduledTime', ScheduledTimeSchema);
