var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

var heroin = require('heroin');
var mulByB = heroin(mul, { b: constant });
// mulByB will call mul(x, constant)
// because it injected constant as argument "b"

numbers.map(mulByB).forEach(print);
// 6 2 14
