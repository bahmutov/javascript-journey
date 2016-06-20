var numbers = [3, 1, 7];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}

var byConstant = mul.bind(null, constant);

function head(array){
  return array[0];
}

function tail(array){
  return array.slice(1);
}

function map(array, cb) {
  if (array.length === 0){
    return [];
  }
  
  return [cb(head(array))].concat(map(tail(array), cb));
}

function forEach(array, cb) {
  if (array.length == 0){
    return;
  }

  cb(head(array));
  forEach(tail(array), cb);
}

forEach(map(numbers, byConstant), print);
// 6 2 14
