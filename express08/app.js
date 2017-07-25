var express = require('express');
var app = express();
var fs = require('fs')

app.get('/books', function(req, res){ 
  fs.readFile(process.argv[3], 'utf8', function (err, data) {
    object = JSON.parse(data)
    res.json(object)
  })
});

app.listen(process.argv[2])


    // var express = require('express')
    // var app = express()
    // var fs = require('fs')

    // app.get('/books', function(req, res){
    //   var filename = process.argv[3]
    //   fs.readFile(filename, function(e, data) {
    //     if (e) return res.sendStatus(500)
    //     try {
    //       books = JSON.parse(data)
    //     } catch (e) {
    //       res.sendStatus(500)
    //     }
    //     res.json(books)
    //   })
    // })

    // app.listen(process.argv[2])