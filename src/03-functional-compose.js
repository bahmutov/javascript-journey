var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

var byConstant = mul.bind(null, constant);

function forEach(array, cb) {
  for (var k = 0; k < array.length; k += 1) {
    cb(array[k]);
  }
}

// mathematical composition of functions
// (f * g) (x) = f(g(x))
function compose(f, g) {
  return function (x) {
    return f(g(x));
  }
}

var process = compose(print, byConstant);
forEach(numbers, process);
// 6 2 14
