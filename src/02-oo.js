var numbers = [3, 1, 7];
var constant = 2;

// constructor
function NumberMultiplier() {}

// prototype methods
NumberMultiplier.prototype.setNumbers = function (numbers) {
  this.numbers = numbers;
  return this;
};

NumberMultiplier.prototype.multiply = function (constant) {
  for (var k = 0; k < this.numbers.length; k += 1) {
    this.numbers[k] = constant * this.numbers[k];
  }
  return this;
};

NumberMultiplier.prototype.print = function () {
  console.log(this.numbers);
  return this;
};

new NumberMultiplier()
  .setNumbers(numbers)
  .multiply(constant)
  .print();
// [ 6, 2, 14 ]
