var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('users')

    // collection.update({
    //   username: "tinatime"
    // }, {
    //   $set: {
    //     age: 40
    //   }
    // })

    collection.update({username: 'tinatime'}, {$set:{age:40}});

  db.close()
})