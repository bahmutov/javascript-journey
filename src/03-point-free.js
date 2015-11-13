var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}

// standard practice
// iterator callbacks pass arguments to specific functions
numbers
  .map(function (x) {
    return mul(constant, x);
  }).forEach(function (k) {
    console.log(k);
  });
// 6 2 14

// make multiplication point-free
numbers
  .map(mul.bind(null, constant))
  .forEach(function (k) {
    console.log(k);
  });
// 6 2 14

// we cannot simple pass console.log as forEach() callback
// because console.log will print ALL arguments, not just the first one
// while forEach() passes (item, index, array)
numbers
  .map(mul.bind(null, constant))
  .forEach(console.log);
/*
6 0 [ 6, 2, 14 ]
2 1 [ 6, 2, 14 ]
14 2 [ 6, 2, 14 ]
*/

// point-free is about adopting callback signatures
function first(fn) {
  return function (x) {
    return fn(x);
  };
}
numbers
  .map(mul.bind(null, constant))
  .forEach(first(console.log));
// 6 2 14
