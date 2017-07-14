// include the Lo-Dash library
var _ = require("lodash");


var worker = function(collection) {
    var hot =[], warm = [];

    function isHot (collection) {
        return collection > 19;
    };

     _.forEach(collection, function(item, itemName) {
        if (_.every(item, isHot)) {
            hot.push(itemName);
        } else if (_.some(item, isHot)) {
            warm.push(itemName);
        }
    });

    return { hot: hot, warm: warm }
};

module.exports = worker;


/* 
const _ = require("lodash");
    
    var tempsort = function (item) {
    
        var result = {
            hot: [],
            warm: []
        };
    
        // If temp > 19
        const check_temp = (item) => item > 19;
    
        _.forEach(item, function (town, townname) {
    
            if (_.every(town, check_temp)) {
                result.hot.push(townname);
            } else if (_.some(town, check_temp)) {
                result.warm.push(townname);
            }
    
        });
    
        return result;
    };
    
    module.exports = tempsort;
    */