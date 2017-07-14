var mongo = require('mongodb').MongoClient
var document = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  }

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  if (err) throw err
  var collection = db.collection('users')

  collection.insert(document, function(err, data) {
    console.log(JSON.stringify(document));
  })
  db.close()
})