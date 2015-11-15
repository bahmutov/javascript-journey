'use strict';

// to run use Node 5
// nvm use 5
// node 02-oo-es6.js

var numbers = [3, 1, 7];
var constant = 2;

class NumberMultiplier {
  setNumbers(numbers) {
    this.numbers = numbers;
    return this;
  }

  multiply(constant) {
    for (var k = 0; k < this.numbers.length; k += 1) {
      this.numbers[k] = constant * this.numbers[k];
    }
    return this;
  }

  print() {
    console.log(this.numbers);
    return this;
  }
}

new NumberMultiplier()
  .setNumbers(numbers)
  .multiply(constant)
  .print();
// [ 6, 2, 14 ]
