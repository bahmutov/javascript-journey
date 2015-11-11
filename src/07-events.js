var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

var _ = require('lodash');
var events = require('events');
var numberEmitter = new events.EventEmitter();
numberEmitter.on('number', _.compose(print, byConstant));

var lazy = require('lazy.js');
lazy(numbers)
  .async(1000)
  .each(_.bind(numberEmitter.emit, numberEmitter, 'number'));
// prints 6, 2 14 with 1 second intervals
