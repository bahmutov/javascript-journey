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

var k = 0;
var ref = setInterval(function () {
  numberEmitter.emit('number', numbers[k++]);
  if (k >= numbers.length) {
    clearInterval(ref);
  }
}, 1000);
// prints 6, 2 14 with 1 second intervals
