var numbers = [3, 1, 7];
var constant = 2;

// use an promise-returning multiply
var Promise = require('bluebird');
function mul(a, b) {
  return Promise.resolve(a * b);
}

// use a promise-returning print
function print(n) {
  console.log(n);
  return Promise.resolve();
}

var byConstant = mul.bind(null, constant);

// multiplies each number one at a time
function mulAll(numbers) {
  return Promise.map(numbers, byConstant, { concurrency: 1 });
}

// prints each number one at a time
function printAll(numbers) {
  return Promise.map(numbers, print, { concurrency: 1 });
}

// uses https://github.com/yortus/asyncawait
// to execute promise-returning calls just like sync code
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var multiplyAndPrint = async (function () {
  var multiplied = await (mulAll(numbers));
  console.log('multiplied all numbers');
  await (printAll(multiplied));
  console.log('printed all numbers');
});

multiplyAndPrint().then(function () {
  console.log('all done');
});

/*
multiplied all numbers
6
2
14
printed all numbers
all done
*/
