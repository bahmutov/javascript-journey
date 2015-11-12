// run with --harmony flag
var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

function* numberGenerator() {
  for (var k = 0; k < numbers.length; k += 1) {
    yield numbers[k];
  }
}

function* numberProcessor() {
  var gen = numberGenerator();
  for (var x of gen) {
    yield x * constant;
  }
}

function* printNumbers() {
  var gen = numberProcessor();
  for (var x of gen) {
    print(x);
  }
}

// Example: iterate over the generated numbers
/*
var gen = numberGenerator();
for (var x of gen) {
  console.log('generated number %d', x);
}
*/

var gen = printNumbers();
for (var x of gen) {}
