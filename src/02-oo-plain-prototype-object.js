var numbers = [3, 1, 7];
var constant = 2;

// place all methods into a plain object
var NumberMultiplier = {
  setNumbers: function (numbers) {
    this.numbers = numbers;
    return this;
  },
  multiply: function (constant) {
    for (var k = 0; k < this.numbers.length; k += 1) {
      this.numbers[k] = constant * this.numbers[k];
    }
    return this;
  },
  print: function () {
    console.log(this.numbers);
    return this;
  }
};
// create object using a plain object as prototype
// and avoiding "new" keyword
var numberMultiplier = Object.create(NumberMultiplier);
numberMultiplier
  .setNumbers(numbers)
  .multiply(constant)
  .print();
// [ 6, 2, 14 ]
