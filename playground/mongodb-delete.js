// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    //deletemany
    // db.collection('Users').deleteMany({name: "Yipin"}).then((result)=>{
    //     console.log(result);
    // }, (err)=>{
    //     console.log(err);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result)=>{
    //     console.log(result);
    // })


    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        //ID you have to use new ObjectID otherwise it would be deleted.
        _id: new ObjectID("5aa3a34ed24d7218d82981ee")
    }).then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
    
});