var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function processNumber(n, constant) {
  console.log(mul(n, constant));
}
for(var k = 0; k < numbers.length; k += 1) {
  processNumber(numbers[k], constant);
}
// 6 2 14
