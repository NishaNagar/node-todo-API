//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
// var user = {
//     name:"nisha",
//     age:25,
//     location:'jaipur'
// };
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongo db server');
//     db.collection('Todos').insertOne({text:"Something to do",completed:false
// },(err,result)=>{
// if(err){
//     return console.log('Unable to insert to do',err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// })
// db.collection('Users').insertOne(
//     {
//     //  _id:133,
//     name:"nisha",
//     age:25,
//     location:'jaipur'
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert user',err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
// })
    db.close();
});