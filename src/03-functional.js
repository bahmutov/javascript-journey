var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

var byConstant = mul.bind(null, constant);

function map(array, cb) {
  var result = [];
  for (var k = 0; k < array.length; k += 1) {
    result[k] = cb(array[k]);
  }
  return result;
}

function forEach(array, cb) {
  for (var k = 0; k < array.length; k += 1) {
    cb(array[k]);
  }
}

forEach(map(numbers, byConstant), print);
// 6 2 14
