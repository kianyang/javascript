var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    var collection = db.collection('parrots')

    collection.find({
       age: { $gt: parseInt(process.argv[2]) } 
    }).toArray(
      function(err, documents) {
        console.log(documents)
      })
    db.close()
})




    // var mongo = require('mongodb').MongoClient
    // var age = process.argv[2]
    
    // var url = 'mongodb://localhost:27017/learnyoumongo'
    
    // mongo.connect(url, function(err, db) {
    //   if (err) throw err
    //   var parrots = db.collection('parrots')
    //   parrots.find({
    //     age: {
    //       $gt: +age
    //     }
    //   }).toArray(function(err, docs) {
    //     if (err) throw err
    //     console.log(docs)
    //     db.close()
    //   })
    // })