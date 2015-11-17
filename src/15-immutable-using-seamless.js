var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

var byConstant = mul.bind(null, constant);

var immutable = require('seamless-immutable');
immutable(numbers)
  .map(function (x, k, array) {
    array[1] = 1000000;
    return x;
  })
  .map(byConstant)
  .forEach(print);
// setting the array item to another number
// had no effect in the default mode
// in strict mode it would cause an exception
// 6 2 14
