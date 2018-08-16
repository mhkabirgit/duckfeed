var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var ScheduledTimeSchema = new Schema ({
  hour:{type:Number, required:true, min:0, max:23},
  minute: {type: Number, required:true, min:0, max:59},
  second: {type: Number, min:0, max:59}
});

module.exports=mongoose.model('ScheduledTime', ScheduledTimeSchema);
