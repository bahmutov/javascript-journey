'use asm';

// main point is to provide primitive type information
// (unsigned bytes in this case) to the engine
// by using typed arrays and '|0' operators on the individual variables

// Any suggestions for improving this Asm.js example are welcome
// https://github.com/bahmutov/javascript-journey/issues

// numbers is an array of unsigned bytes
var numbers = new Uint8Array([3, 1, 7]);
// constant is an integer
var constant = 2|0;

// multiplication of two integers
function mul(a, b) {
  a = a|0;
  b = b|0;
  return a * b;
}
function print(n) {
  n = n|0;
  console.log(n);
}
var byConstant = mul.bind(null, constant);

function iterate(list, cb) {
  var n = list.length|0;
  var k = 0;
  for (; k < n; k += 1) {
    cb(list[k]|0);
  }
}

// while v8 in node does not offer performance improvements,
// other environments, like Firefox can
var start = process.hrtime();
iterate(numbers, byConstant);
var elapsed = process.hrtime(start);
console.log('multiplication took %d seconds %d nanoseconds',
  elapsed[0], elapsed[1]);

