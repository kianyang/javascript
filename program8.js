var http = require('http')
var bl = require('bl') 
var fullMessage = '';
var totalChars = 0;

http.get(process.argv[2], function(response) {
  response.pipe(bl(function (err, data) { 
  if (err)
    return console.log('there was an error')

    console.log(data.length);
    console.log(data.toString());
  }))
})

    // var http = require('http')
    // var bl = require('bl')
    
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })