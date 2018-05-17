const mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema({
	dog: { 
		id:{type: mongoose.Schema.Types.ObjectId, 
		ref: 'Dogs'},
		dogname: String,
	}
	date: String,
	specialInfo: String,
});

module.exports= mongoose.model("Order", DogSchema);