var fs = require('fs')
var path = require('path')

module.exports = function (folder, extension, callback) {  
    fs.readdir(folder, function (err, list) {
    if (err)  
      return callback(err) // early return  
    
    list = list.filter(function (item) {
        return path.extname(item) === '.' + extension
    })
    callback(null, list)
  })
}
