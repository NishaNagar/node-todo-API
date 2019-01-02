
const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err) return console.log('Unable to connect to mongo db server');
console.log('Connected to mongodb server');
// db.collection('Todos').findOneAndUpdate({
//     _id:new ObjectID("5c265190620493af82ba749d")
// },{$set:{completed:true}

// },{
//     returnOriginal:false
// }).then((result)=>{
// console.log(result);
// });
db.collection('Users').findOneAndUpdate({
    _id:new ObjectID("5c227b41a4ddcb1dac5144ff")
},{$set:{name:"nisha"},
$inc:{
    age:1
}
},{
    returnOriginal:false
}).then((result)=>{
console.log(result);
});
});