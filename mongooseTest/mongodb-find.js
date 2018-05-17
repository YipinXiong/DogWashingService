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

	//what find() here is a cursor pointing to the objects and a lot of built-in methods.
	//toArray() returns a promise. Two cases should be considered.
	// db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=>{
	// 	console.log('Unable to fetch todos', err);
	// });
	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count: ${count}`);
	// }, (err)=>{
	// 	console.log('Unable to fetch todos', err);
	// });
	db.collection('Users').find({name: 'Yipin'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs ,undefined, 2));
	}, (err)=>{
		console.log('Unable to look up to the database', err);
	});

	// db.close();
});