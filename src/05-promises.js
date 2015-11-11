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

console.log('running all async operations in parallel');
Q.all(numbers.map(promiseToMulNumber))
  .then(print)
  .done();
// sleeps 1 second
// then prints [6, 2, 14]
