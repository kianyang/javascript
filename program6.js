var mymodule = require('./mymodule')  

mymodule(process.argv[2], process.argv[3], function (err, list) {
    if (err)
      return console.error('there was an error');

    list.forEach(function(list) {
        console.log(list);
    })
})