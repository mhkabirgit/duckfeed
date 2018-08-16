var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  user: {type: Schema.ObjectId, ref: 'User', required: true},
  scheduledFeeding: {type: Schema.ObjectId, ref:'ScheduledFeeding', required:true},
  startDate: {type:Date, required:true},
  endDate: {type:Date}
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
