var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

// using https://github.com/cognitect-labs/transducers-js
var T = require('transducers-js');
var result = T.into(
  [],
  T.map(byConstant), // could be multiple operations
  numbers
);
console.log(result);
// [ 6, 2, 14 ]
