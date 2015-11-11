var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

var Rx = require('rx');
var timeEvents = Rx.Observable
  .interval(1000)
  .timeInterval();

var numberEvents = Rx.Observable
  .fromArray(numbers);

function pickSecondValue(first, second) {
  return second;
}
Rx.Observable.zip(timeEvents, numberEvents, pickSecondValue)
  .map(byConstant)
  .subscribe(print);
// prints 6 2 14 with 1 second intervals
