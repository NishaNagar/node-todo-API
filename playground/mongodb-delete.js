const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    //delete many
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//     console.log(result);
//     })
// db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
//     console.log(result);
// });
//db.collection('Users').deleteMany({name:'nisha'});
db.collection('Users').findOneAndDelete({_id:new ObjectID('5c23b6746c28771f40da661a')}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
})
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
// })
})
