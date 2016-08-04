// goal: multiply each __even__ number and print the result

var Maybe = require('data.maybe');

var numbers = [3, 2, 6, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
function isEven(n) {
  return n % 2 === 0;
}

var byConstant = mul.bind(null, constant);
function forEach(cb, array) {
  for (var k = 0; k < array.length; k += 1) {
    cb(array[k]);
  }
}

/*
  imperative solution would just use the "IF/ELSE"
    if (isEven(x)) {
      print(byConstant(x))
    }
  instead we are going to put the number in a wrapper Maybe
  if the number is even we are going to have wrapper Maybe.Just
  and the Maybe.Just().map(f) will call "f" passing the value inside

  On the other hand, any value placed into Maybe.Nothing
  is lost - Maybe.Nothing().map(f) will NOT call "f"
*/
const maybeEven = n => isEven(n) ? Maybe.Just(n) : Maybe.Nothing();
const process = n => maybeEven(n).map(byConstant).map(print);
/*
                3 ----- Nothing()
                2 ----- Just(2)------- Just(4) ------ "4" (Just(4) continues)
                6 ----- Just(6)------- Just(12) ----- "12" (Just(12) continues)
                7 ----- Nothing()
*/

forEach(process, numbers);
// 4 12
