var numbers = [3, 1, 7];
var constant = 2;

function print(n) {
  console.log(n);
}

// notice built-in currying in Ramda methods
var R = require('ramda');
var byConstant = R.multiply(constant);
var mapByConstant = R.map(byConstant);
var printEach = R.forEach(print);

// R.pipe is the inverse of R.compose
var algorithm = R.pipe(mapByConstant, printEach);
algorithm(numbers);
// 6 2 14

// even shorter for this simple case
// is to rely on curried functions
R.pipe(
  R.map(R.multiply(constant)),
  R.forEach(print)
)(numbers);
// 6 2 14
