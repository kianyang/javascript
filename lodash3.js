// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    return _.forEach(collection, function(item) {
        if (item.population > 1) {
            item.size = 'big'
        } else if (item.population > 0.5 && item.population < 1) {
            item.size = 'med'
        } else {
            item.size = 'small'
        }
    });
};

// export the worker function as a nodejs module
module.exports = worker;


/* 
    const _ = require("lodash");
    
    const inEveryCase = function(collection){
    
      // add a size attribute to the collection based on the item's population
      return _.forEach(collection, function(item) {
        if (item.population > 1) {
          item.size = "big";
        } else if(item.population > 0.5) {
          item.size = "med";
        } else {
          item.size = "small";
        }
      });
    };
    */