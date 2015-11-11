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
var lazy = require('lazy.js');
var events = require('events');

function source(list) {
  var eventEmitter = new events.EventEmitter();
  lazy(list)
    .async(1000)
    .each(_.bind(eventEmitter.emit, eventEmitter, 'step'));
  return {
    on: function (cb) {
      eventEmitter.on('step', cb);
    }
  };
}
source(numbers)
  .on(_.compose(print, byConstant));

// prints 6, 2 14 with 1 second intervals
