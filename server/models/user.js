var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  username: {type:String, unique:true, required:true, trim:true},
  email: {type:String, unique:true, required:true, trim:true},
  password: {type:String, required:true}
});

UserSchema
.virtual('url')
.get(function() {
  return '/users/'+this._id;
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
