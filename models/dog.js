const mongoose = require("mongoose");

var DogSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	breed: String,
	date-of-birth: String,
	owner: {      
		id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
  	},
});

module.exports= mongoose.model("Dog", DogSchema);