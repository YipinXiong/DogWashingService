const mongoose = require("mongoose");
var ProfileSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
	firstname: String,
	lastname: String,
	address: String,
	work_number: String,
	home_number: String,
	// dogs: {type: mongoose.Schema.Types.ObjectId, ref: 'Dogs'},
});

module.exports= mongoose.model("Profile", ProfileSchema);