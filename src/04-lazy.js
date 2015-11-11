var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

var lazy = require('lazy.js');
lazy(numbers)
  .async(1000) // 1000ms = 1 sec
  .map(byConstant)
  .each(print);
// sleeps 1 second between printing each number
