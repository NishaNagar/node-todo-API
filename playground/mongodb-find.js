const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to mongo db server');
}
console.log('Connected to mongo db server');
// db.collection('Todos').find({
//     _id:new ObjectID('5c23c117620493af82ba6ace')
// }).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('Unable to feth Todos');
// })
// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count:${count}`);
// },
// (err)=>{console.log('unable to fetch todos',err)});
db.collection('Users').find({name:'neetu'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
});
});