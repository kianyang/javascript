var fs = require('fs')  
var file, fileString;

fileString = fs.readFileSync(process.argv[2]).toString();
console.log(fileString.split('\n').length - 1)