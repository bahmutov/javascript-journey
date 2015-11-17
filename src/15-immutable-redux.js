// instead of using default JavaScript structures,
// store everything in an immutable "tree"
var immutable = require('immutable');

var state = immutable.fromJS({
  numbers: [3, 1, 7],
  constant: 2
});
function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

// define a single function works on the immutable state object
// and produces another full immutable state object
function multiply(currentState) {
  var byConstant = mul.bind(null, currentState.get('constant'));
  return currentState.updateIn(['numbers'], function (ns) {
    return ns.map(byConstant);
  });
}

var multiplied = multiply(state);
console.log('original state', state);
console.log('multiplied state', multiplied);
console.log('is state === multiplied state?', state === multiplied);
/*
original state Map { "numbers": List [ 3, 1, 7 ], "constant": 2 }
multiplied state Map { "numbers": List [ 6, 2, 14 ], "constant": 2 }
is state === multiplied state? false
*/
