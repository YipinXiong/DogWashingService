// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// It is destruction powered by ES6, and it will create a variable that is pulled from "require('mongodb')"
//and the new created variable name is exactly the same as MongoClient.

// var obj = new ObjectID()
//MongoClient Let you connect to a database and issue commands to manipulate the database

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err,result)=>{
	// 	if(err) {
	// 		return console.log('Unable to insert todo',err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// Insert new doc into Users (name, age, location)

	db.collection('Users').insertOne({
		name: "Chunhua Jiang",
		age: 41,
		location: "Nanchang, Jiangxi"
	}, (err, result)=>{
		if(err) {
			return console.log('Unable to insert an User');
		}
		//result.ops is an array that contains all the inserted result.
		console.log(result.ops[0]._id.getTimestamp());
	})
	db.close();
});