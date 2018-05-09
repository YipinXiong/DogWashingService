var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    profile: {type: mongoose.Schema.Types.ObjectId, ref:'Profile'},
    orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Order'}],
});

var ProfileSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
	firstname: String,
	lastname: String,
	address: String,
	work_number: String,
	home_number: String,
	dogs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dogs'}],
});

var DogSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	breed: String,
	date-of-birth: String,
	owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
});

var OrderSchema = new mongoose.Schema({
	dog: {type: mongoose.Schema.Types.ObjectId, ref: 'Dogs'},
	date: String,
	review: String,
});
UserSchema.plugin(passportLocalMongoose);

const Dog = mongoose.model("Dog", DogSchema);
const OrderSchema = mongoose.model("Order", DogSchema);
const ProfileSchema = mongoose.model("Profile", ProfileSchema);
const User = mongoose.model("User", UserSchema);

module.exports = mongoose.model("User", UserSchema);