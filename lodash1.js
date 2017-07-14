// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    return _.filter(collection, { active: true });
};

// export the worker function as a nodejs module
module.exports = worker;


/*
  const _ = require("lodash");
    
    const filterwhere = function (item) {
        return _.filter(item, {active: true});
    };
    
    module.exports = filterwhere;

*/