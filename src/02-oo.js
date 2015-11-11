var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
numbers.map(function (n) {
  return mul(n, constant);
}).forEach(print);
// 6 2 14
