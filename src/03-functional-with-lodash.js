var numbers = [3, 1, 7];
var constant = 2;

var _ = require('lodash');

_.map(numbers, number => console.log(number * constant));
