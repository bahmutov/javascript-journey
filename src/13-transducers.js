// Make the problem slightly longer
// we need to multiply the numbers,
// then add 3 to each result
// then filter numbers less than 10
// then convert the remaining to hex and return as single string

// This way we will have more steps to play with
var numbers = [3, 1, 7, 5, 10];
var constant = 2;
var addConstant = 3;
var sep = '';

function mul(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}
function gt(a, b) {
  return a < b;
}
function toHex(x) {
  return Number(x).toString(16).toUpperCase();
}
function joinStrings(separator, a, b) {
  if (!a) {
    return b;
  }
  return a + separator + b;
}
function print(n) {
  console.log(n);
}
var mulBy = mul.bind(null, constant);
var addConst = add.bind(null, addConstant);
var gt10 = gt.bind(null, 10);
var joinSep = joinStrings.bind(null, sep);

// traditional approach
// creates full array at each step
// implements join using "Array.reduce"
// starting with numbers = [3, 1, 7, 5, 10]
var result = numbers.map(mulBy) // [6, 2, 14, 10, 20]
  .map(addConst)                // [9, 5, 17, 13, 23]
  .filter(gt10)                 // [17, 13, 23]
  .map(toHex)                   // ['11', 'D', '17']
  .reduce(joinSep, '');         // '11D17'
console.log(result);

// let us remove intermediate arrays
// using https://github.com/cognitect-labs/transducers-js

var T = require('transducers-js');
var result = T.into(
  '',
  T.comp(              // creates single callback function
    T.map(mulBy),      // from these steps
    T.map(addConst),   // no intermediate arrays
    T.filter(gt10),
    T.map(toHex)
  ),
  numbers
);
console.log(result);
// '11D17'
