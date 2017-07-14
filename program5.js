var fs = require('fs')
var path = require('path')
var directoryList;
var results = [];

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err;

    list.filter(function (item) {
        if (path.extname(item) == '.' + process.argv[3]) {
            console.log(item)
        }
    })
});
