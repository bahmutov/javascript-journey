'use strict';

var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

// stream of numbers from an Array
var util = require('util');
var Readable = require('stream').Readable;
util.inherits(NumberStream, Readable);

function NumberStream(numbers) {
  Readable.call(this, {
    objectMode: true
  });
  this.numbers = numbers;
  this.index = 0;
}

NumberStream.prototype._read = function _read() {
  // utility functions for clarity
  function outputNextNumber() {
    this.push(this.numbers[this.index++]);
  }

  function isFinished() {
    return this.index >= this.numbers.length;
  }

  outputNextNumber.call(this);
  if (isFinished.call(this)) {
    this.push(null);
  }
};

var numbers_ = new NumberStream(numbers);

// to just print the numbers
/*
numbers_.on('data', print);
numbers_.on('end', function () {
  console.log('numbers stream finished');
});*/


