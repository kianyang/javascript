// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    return _.sortBy(collection, function(item) {
      return -item.quantity; 
    });
};

// return _.sortBy(collection,"quantity").reverse();
// export the worker function as a nodejs module
module.exports = worker;


