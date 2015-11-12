var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

var _ = require('lodash');
var byConstant = _.partial(mul, constant);

_.forEach(
  _.map(numbers, byConstant),
  print
);
// 6 2 14
