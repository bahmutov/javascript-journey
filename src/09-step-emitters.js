// reusable step emitter "library"
var _ = require('lodash');
var events = require('events');
var stepEmitter = {
  // apply given callback to the value received
  // then emit the result through NEW step emitter
  map: function (cb) {
    var emitter = new events.EventEmitter();
    this.on('step', function (value) {
      var mappedValue = cb(value);
      emitter.emit('step', mappedValue);
    });
    return _.extend(emitter, stepEmitter);
  },
  // apply given callback to to the value received
  // then emit the value again through NEW step emitter
  forEach: function (cb) {
    var emitter = new events.EventEmitter();
    this.on('step', function (value) {
      cb(value);
      emitter.emit('step', value);
    });
    return _.extend(emitter, stepEmitter);
  },
  // returns a new step emitter that accumulates N items
  // emits the entire array with N items as single argument
  buffer: function (n) {
    var received = [];
    var emitter = new events.EventEmitter();
    this.on('step', function (value) {
      received.push(value);
      if (received.length === n) {
        emitter.emit('step', received);
        received = [];
      }
    });
    return _.extend(emitter, stepEmitter);
  }
};

// returns stepEmitter = event emitter + stepEmitter methods
function source(list) {
  var lazy = require('lazy.js');

  var eventEmitter = new events.EventEmitter();
  lazy(list)
    .async(1000)
    .each(_.bind(eventEmitter.emit, eventEmitter, 'step'));

  return _.extend(eventEmitter, stepEmitter);
}

// our "user" functions, take 4 numbers for clarity
var numbers = [3, 1, 7, 5];
var constant = 2;

function mul(a, b) {
  return a * b;
}
function print(n) {
  console.log(n);
}
var byConstant = mul.bind(null, constant);

// use source library
source(numbers)
  .map(byConstant)
  .buffer(2)
  .forEach(print);
// sleeps 2 seconds
// [ 6, 2 ]
// sleeps 2 seconds
// [ 14, 10 ]
