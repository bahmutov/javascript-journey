var numbers = [3, 1, 7];
var constant = 2;

var Q = require('q');
function asyncMul(a, b) {
  return Q(a * b).delay(1000);
}
function print(n) {
  console.log(n);
}
var byConstantAsync = asyncMul.bind(null, constant);
var promiseToMulNumber = function (n) {
  return byConstantAsync(n);
};

var mulAndPrint = function (n) {
  return function () {
    return byConstantAsync(n).then(print);
  };
};

console.log('running one async action at a time');
numbers.map(mulAndPrint)
  .reduce(Q.when, Q())
  .done();
// sleeps 1 second
// 6
// sleeps 1 second
// 2
// ...
